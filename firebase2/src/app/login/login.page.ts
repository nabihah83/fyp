import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

post = {} as Post;

  constructor(
  private toastCtrl: ToastController,
  private loadingCtrl: LoadingController,
  private navCtrl: NavController,
  private firestore: AngularFirestore) {}

  ngOnInit() {}

  
 async createPost(post: Post){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();

 try{
 await this.firestore.collection("login").add(post);
 } catch(e){
 this.showToast(e);
 }
 //dismiss loader
 (await loader).dismiss();
 //redirect to home page
 this.navCtrl.navigateRoot("home");
 }
}

 formValidation(){
 if(!this.post.email){
 this.showToast("Enter email");
 return false;
 }
 if(!this.post.password){
 this.showToast("Enter password/No.Telephone");
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
