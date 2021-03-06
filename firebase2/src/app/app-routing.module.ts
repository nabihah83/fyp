import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homee',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'homee',
    loadChildren: () => import('./homee/homee.module').then( m => m.HomeePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'loginn',
    loadChildren: () => import('./loginn/loginn.module').then( m => m.LoginnPageModule)
  },
  {
    path: 'registerr',
    loadChildren: () => import('./registerr/registerr.module').then( m => m.RegisterrPageModule)
  },
  {
    path: 'order-view',
    loadChildren: () => import('./order-view/order-view.module').then( m => m.OrderViewPageModule)
  },
  {
    path: 'order-edit/:id',
    loadChildren: () => import('./order-edit/order-edit.module').then( m => m.OrderEditPageModule)
  },
  {
    path: 'reserve-view',
    loadChildren: () => import('./reserve-view/reserve-view.module').then( m => m.ReserveViewPageModule)
  },
  {
    path: 'reserve-edit/:id',
    loadChildren: () => import('./reserve-edit/reserve-edit.module').then( m => m.ReserveEditPageModule)
  },
  {
    path: 'view-login',
    loadChildren: () => import('./view-login/view-login.module').then( m => m.ViewLoginPageModule)
  },
  {
    path: 'edit-login/:id',
    loadChildren: () => import('./edit-login/edit-login.module').then( m => m.EditLoginPageModule)
  },
  {
    path: 'view-info',
    loadChildren: () => import('./view-info/view-info.module').then( m => m.ViewInfoPageModule)
  },
  {
    path: 'edit-info/:id',
    loadChildren: () => import('./edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  },
  {
    path: 'view-admin',
    loadChildren: () => import('./view-admin/view-admin.module').then( m => m.ViewAdminPageModule)
  },
  {
    path: 'edit-admin/:id',
    loadChildren: () => import('./edit-admin/edit-admin.module').then( m => m.EditAdminPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
