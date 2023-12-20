import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]> | undefined

  // uncommenting the contents causes the app to crash whenever anything is changed
  constructor() {
    // const aCollection = collection(this.firestore, 'items')
    // this.items$ = collectionData(aCollection)
  }

  ngOnInit(): void {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection)
  }


  // title = 'pokerparty';
  todo = ['TODO 1'];
  inProgress = ['IP 1'];
  done = ['DONE 1'];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.container.id === event.previousContainer.id) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.todo.push(input.value);
    input.value = '';
  }
}
