import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-reserve-edit',
  templateUrl: './reserve-edit.page.html',
  styleUrls: ['./reserve-edit.page.scss'],
})
export class ReserveEditPage implements OnInit {
post = {} as Post;
id: any;
  constructor(
  private actRoute: ActivatedRoute,
 private loadingCtrl: LoadingController,
 private firestore: AngularFirestore,
 private toastCtrl: ToastController,
 private navCtrl: NavController) { 
 this.id = this.actRoute.snapshot.paramMap.get("id");
 }

  ngOnInit() {
  this.getPostById(this.id);
  }

  async getPostById(id: string){
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 this.firestore.doc("reserve/" + id)
 .valueChanges()
 .subscribe(data => {
 this.post.name = data["name"];
 this.post.person = data["person"];
 this.post.time = data["time"];
 this.post.date = data["date"];
 this.post.order= data["order"];
 });
 //dismiss loader
 (await loader).dismiss();
 }
 async updatePost(post: Post){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try{

 await this.firestore.doc("reserve/" + this.id).update(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to view post page
 this.navCtrl.navigateRoot("reserve-view");
 }
 }
 formValidation(){
 if(!this.post.name){
 this.showToast("Enter name");
 return false;
 }

 if(!this.post.person){
 this.showToast("Enter person");
 return false;
 }
 if(!this.post.time){
 this.showToast("Enter time");
 return false;
 }
 if(!this.post.date){
 this.showToast("date");
 return false;
 }
 if(!this.post.order){
 this.showToast("order");
 return false;
 }
 return true;
 }
 showToast (message:string){
 this.toastCtrl.create({
 message: message,
 duration: 3000
 })
 .then(toastData => toastData.present());
 }

}

