import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { EditText, Upvote, Downvote, Reset} from '../../stores/postState/post.actions';
import { MoreComponent } from '../more/more.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  text = '';
  post2$: Observable<string[]>;
  message1$: Observable<string>;

  constructor(private store: Store) {
    this.post2$ = this.store.select(state => state.post);
    this.store.select(state => state.post).subscribe(data => console.log('New page -> ', data));

    this.message1$ = this.store.select(state => state.message);
  }

  ngOnInit() {

  }

  change() {
    this.store.dispatch(new EditText(this.text));
  }

  up() {
    this.store.dispatch(new Upvote());
  }

  down() {
    this.store.dispatch(new Downvote());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

}
