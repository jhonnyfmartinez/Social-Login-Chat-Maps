import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { AuthPage } from '../pages/auth/home/home';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Maps } from '../pages/maps/maps';
import { AngularFireModule } from 'angularfire2';

// Providers
import { AuthProvider } from '../providers/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyCgASztsSBgjaOIWJYS4wbxVH_Nyv3XvF0",
  authDomain: "test-a24de.firebaseapp.com",
  databaseURL: "https://test-a24de.firebaseio.com",
  storageBucket: "test-a24de.appspot.com"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    Dashboard,
    Maps
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    Dashboard,
    Maps
  ],
  providers: [AuthProvider]
})
export class AppModule {}
