import { Component, OnInit } from '@angular/core';
import { EditText, Upvote, Downvote, Reset} from '../../stores/postState/post.actions';
import { AddString } from '../../stores/stringState/string.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  text = '';
  strings = '';
  lazy$: Observable<string[]>;
  message1$: Observable<string>;

  constructor(private store: Store) {
    this.lazy$ = this.store.select(state => state.post);
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

  addStrings() {
    this.store.dispatch(new AddString(this.strings));
  }

}
