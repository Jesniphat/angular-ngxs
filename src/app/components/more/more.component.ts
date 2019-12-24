import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { EditText, Upvote, Downvote, Reset} from '../../stores/postState/post.actions';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  text = '';
  post3$: Observable<string[]>;
  message2$: Observable<string>;

  constructor(private store: Store) {
    this.post3$ = this.store.select(state => state.post);
    this.store.select(state => state.post).subscribe(data => console.log('More page -> ', data));

    this.message2$ = this.store.select(state => state.message);
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
