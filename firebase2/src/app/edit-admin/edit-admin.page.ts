import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {
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
 this.firestore.doc("registerAdmin/" + id)
 .valueChanges()
 .subscribe(data => {
 this.post.emaill = data["emaill"];
 this.post.passwordd = data["passwordd"];
 this.post.number = data["number"];
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

 await this.firestore.doc("registerAdmin/" + this.id).update(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to view post page
 this.navCtrl.navigateRoot("view-admin");
 }
 }
 formValidation(){
 if(!this.post.emaill){
 this.showToast("Enter email");
 return false;
 }

 if(!this.post.passwordd){
 this.showToast("Enter password");
 return false;
 }
 if(!this.post.number){
 this.showToast("Enter number id");
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

