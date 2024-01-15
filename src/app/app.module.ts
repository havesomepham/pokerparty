import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CardComponent } from './card/card.component';
import { PlayerComponent } from './player/player.component';
import { CommunityComponent } from './community/community.component';
import { UserComponent } from './user/user.component';
import { HostComponent } from './host/host.component';


@NgModule({
  declarations: [AppComponent, CardComponent, PlayerComponent, CommunityComponent, HostComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pokerparty-a1760","appId":"1:327148006791:web:d9b3681a6adbd683b3f722","databaseURL":"https://pokerparty-a1760-default-rtdb.firebaseio.com","storageBucket":"pokerparty-a1760.appspot.com","apiKey":"AIzaSyDWeJRQAeSyg-3JfBBIjTkmxRTDHkQPP58","authDomain":"pokerparty-a1760.firebaseapp.com","messagingSenderId":"327148006791","measurementId":"G-3SLXJ6ZBLZ"})),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp({}),
    AngularFirestoreModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
