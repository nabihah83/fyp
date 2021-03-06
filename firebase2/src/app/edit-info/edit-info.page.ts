import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {
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
 this.firestore.doc("info/" + id)
 .valueChanges()
 .subscribe(data => {
 this.post.info = data["info"];
 
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

 await this.firestore.doc("info/" + this.id).update(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to view post page
 this.navCtrl.navigateRoot("view-info");
 }
 }
 formValidation(){
 if(!this.post.info){
 this.showToast("Enter info");
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


