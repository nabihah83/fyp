import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.page.html',
  styleUrls: ['./order-edit.page.scss'],
})
export class OrderEditPage implements OnInit {
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
 this.firestore.doc("order/" + id)
 .valueChanges()
 .subscribe(data => {
 this.post.order = data["order"];
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

 await this.firestore.doc("order/" + this.id).update(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to view post page
 this.navCtrl.navigateRoot("order-view");
 }
 }
 formValidation(){
 if(!this.post.order){
 this.showToast("Enter order");
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

