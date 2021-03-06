import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-reserve-view',
  templateUrl: './reserve-view.page.html',
  styleUrls: ['./reserve-view.page.scss'],
})
export class ReserveViewPage implements OnInit {
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
 .collection("reserve")
 .snapshotChanges()
 .subscribe(data => {
 this.posts = data.map(e => {
 return {
 id: e.payload.doc.id,
 name: e.payload.doc.data()["name"],
 person: e.payload.doc.data()["person"],
 time: e.payload.doc.data()["time"],
 date: e.payload.doc.data()["date"],
 order: e.payload.doc.data()["order"]
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
 await this.firestore.doc("reserve/" + id).delete();
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

