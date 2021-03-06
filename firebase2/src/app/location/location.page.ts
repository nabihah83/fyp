import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
post = {} as Post;
  constructor(
   private toastCtrl: ToastController,
   private loadingCtrl: LoadingController,
   private navCtrl: NavController,
   private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  async createPost(post: Post){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try{
 await this.firestore.collection("info").add(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();

 //redirect to home page
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
