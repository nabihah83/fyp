import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.page.html',
  styleUrls: ['./view-login.page.scss'],
})
export class ViewLoginPage implements OnInit {
 posts: any;

  constructor(
  private loadingCtrl: LoadingController,
 private toastCtrl: ToastController,
 private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
 this.getPosts();
 }
 async getPosts(){
 //show loader
 let loader = await this.loadingCtrl.create({
 message: "Please wait..."
 });
 loader.present();
 try {
 this.firestore
 .collection("login")
 .snapshotChanges()
 .subscribe(data => {
 this.posts = data.map(e => {
 return {
 id: e.payload.doc.id,
 email: e.payload.doc.data()["email"],
 
 
 };
 });
 loader.dismiss();
 });

 } catch(e){
 this.showToast(e);
 }
 }
 async deletePost(id: string){
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 await this.firestore.doc("login/" + id).delete();
 //dismiss loader
 (await loader).dismiss();
 }
 showToast (message:string){
 this.toastCtrl.create({
 message: message,
 duration: 3000
 }).then(toastData => toastData.present());
 }


}

