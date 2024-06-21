import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

// Replace with your firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBKNZq0bYKtWeaUDsz_dMdT6nfMIh-rPyA',
  authDomain: 'serene-spaces.firebaseapp.com',
  projectId: 'serene-spaces',
  storageBucket: 'serene-spaces.appspot.com',
  messagingSenderId: '319966719122',
  appId: '1:319966719122:web:98f6873517d3b737c0ca4b',
  measurementId: 'G-XXW0X76CGG',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),

    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)), //firebase  application
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
