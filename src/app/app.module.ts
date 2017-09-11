import { RegisterPage } from './../pages/register/register';

import { LoginPage } from './../pages/login/login';
import { DetailsPage } from './../pages/details/details';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServicesAuthProvider } from '../providers/services-auth/services-auth';


//AngularFire

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';


const firebase ={

  apiKey: "AIzaSyCQ2q70bG5jcuQjnlgQq7jr7s86oOTFF4U",
  authDomain: "test-66e46.firebaseapp.com",
  databaseURL: "https://test-66e46.firebaseio.com",
  projectId: "test-66e46",
  storageBucket: "test-66e46.appspot.com",
  messagingSenderId: "457540627637"



}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesAuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesAuthProvider
  ]
})
export class AppModule {}
