import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.page.html',
  styleUrls: ['./view-info.page.scss'],
})
export class ViewInfoPage implements OnInit {
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
 .collection("info")
 .snapshotChanges()
 .subscribe(data => {
 this.posts = data.map(e => {
 return {
 id: e.payload.doc.id,
 info: e.payload.doc.data()["info"]
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
 await this.firestore.doc("info/" + id).delete();
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


