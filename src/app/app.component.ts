import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { EditText, Upvote, Downvote, Reset} from './stores/postState/post.actions';
import { Spanish, Franch} from './stores/messageState/message.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jesse-ngxs';
  name = 'Angular';
  text = '';
  post1$: Observable<string[]>;
  message$: Observable<string>;

  constructor(private store: Store) {
    this.post1$ = this.store.select(state => state.post);
    this.store.select(state => state.post).subscribe(data => console.log('Index page -> ', data));

    this.message$ = this.store.select(state => state.message);

    this.store.select(state => state.string).subscribe(data => console.log('My string -> ', data));
  }

  ngOnInit() {
    // this.post1$ = this.store.select(state => state.zoo.animals);
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
