import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.page.html',
  styleUrls: ['./view-admin.page.scss'],
})
export class ViewAdminPage implements OnInit {
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
 .collection("registerAdmin")
 .snapshotChanges()
 .subscribe(data => {
 this.posts = data.map(e => {
 return {
 id: e.payload.doc.id,
 emaill: e.payload.doc.data()["emaill"],
 passwordd: e.payload.doc.data()["passwordd"],
 number: e.payload.doc.data()["number"]
 
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
 await this.firestore.doc("registerAdmin/" + id).delete();
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
