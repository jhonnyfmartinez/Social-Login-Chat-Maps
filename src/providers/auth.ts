import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Facebook,GooglePlus } from 'ionic-native';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  user: any;
  constructor(private af: AngularFire) { }

  loginWithCustomFacebook() {
    return Observable.create(observer => {
      Facebook.login(["public_profile","email"]).then(facebookData => {
        let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
        firebase.auth().signInWithCredential(provider).then(firebaseData => {
          this.af.database.list('users').update(firebaseData.uid, {
            name: firebaseData.displayName,
            email: firebaseData.email,
            provider: 'facebook',
            image: firebaseData.photoURL
          });
          var userInfo = {
            name: firebaseData.displayName,
            email: firebaseData.email,
            provider: 'facebook',
            image: firebaseData.photoURL
          }
          observer.next(userInfo);
        });
      }).catch(error =>{
        observer.error(error);
      });
    });
  }

  loginWithCustomGoogle() {
    return Observable.create(observer => {
      GooglePlus.login({
        'scopes': 'profile email',
        'webClientId': '865828464204-eeurqqn6q8crvbq7stb5mktr7vq65cpn.apps.googleusercontent.com'
      }).then( successData => {
        let provider  = firebase.auth.GoogleAuthProvider.credential(successData.idToken);
        firebase.auth().signInWithCredential(provider).then(firebaseData => {
          this.af.database.list('users').update(firebaseData.uid, {
            name: firebaseData.displayName,
            email: firebaseData.email,
            provider: 'google',
            image: firebaseData.photoURL
          });
          var userInfo = {
            name: firebaseData.displayName,
            email: firebaseData.email,
            provider: 'google',
            image: firebaseData.photoURL
          }
          observer.next(userInfo);
        });
      }).catch( error => {
        observer.error(error);
      });
    });
  }
}
