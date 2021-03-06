import { Component } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 post = {} as Post;
  constructor(
  private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore) {}


ngOnInit(){}
async createPost(post: Post){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try{
 await this.firestore.collection("reserve").add(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to home page
 this.navCtrl.navigateRoot("order-view");

 }
 }

 formValidation(){
 if(!this.post.name){
 this.showToast("Enter name");
 return false;
 }
 if(!this.post.date){
 this.showToast("Enter Date");
 return false;
 }
 if(!this.post.time){
 this.showToast("Enter Date");
 return false;
 }
 if(!this.post.person){
 this.showToast("Enter Person");
 return false;
 }
 if(!this.post.order){
 this.showToast("Enter Order");
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
