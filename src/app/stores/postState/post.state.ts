import { State, Action, StateContext } from '@ngxs/store';
import { EditText, Upvote, Downvote, Reset} from './post.actions';
import { LikeService } from 'src/app/like.service';

export interface PostStateModel {
  text: string;
  likes: number;
}

const defaultState: PostStateModel = {
  text: 'Hello. I am the default post',
  likes: 0
};

@State<PostStateModel>({
  name: 'post',
  defaults: defaultState
})
export class PostState {
  constructor(private likeService: LikeService) { }

  @Action(EditText)
  async editText(ctx: StateContext<PostStateModel>, action: EditText) {
    console.log(action);
    const state = ctx.getState();
    ctx.setState({
      ...state,
      text: action.payload
    });
    // ctx.setState((state) => ({...state, text: action.payload}));

    // ctx.patchState({
    //   text: action.payload
    // });
  }

  @Action(Upvote)
  async upvote(ctx: StateContext<PostStateModel>, action: Upvote) {
    console.log(action);
    // const state = ctx.getState();
    // ctx.setState({
    //   ...state,
    //   likes: state.likes + 1
    // });
    ctx.setState((state) => ({...state, likes: state.likes + 1 }));
  }

  @Action(Downvote)
  async downvote(ctx: StateContext<PostStateModel>, action: Downvote) {
    console.log(action);
    const state = ctx.getState();
    const result = await this.likeService.minus(state.likes);
    ctx.setState({
      ...state,
      likes: result
    });
  }

  @Action(Reset)
  async reset(ctx: StateContext<PostStateModel>, action: Reset) {
    const state = ctx.getState();
    ctx.setState(defaultState);
  }
}
