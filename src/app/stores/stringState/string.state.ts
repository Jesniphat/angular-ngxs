import { State, Action, StateContext  } from '@ngxs/store';
import { AddString } from './string.actions';

export interface StringStateModel {
  mystring: string[];
}

@State<StringStateModel>({
  name: 'string',
  defaults: {
    mystring: []
  }
})
export class StringState {
  constructor() {}

  @Action(AddString)
  async addString(ctx: StateContext<StringStateModel>, action: AddString) {
    console.log(action);
    const state = ctx.getState();
    ctx.setState({
      ...state,
      mystring: [
        ...state.mystring,
        action.payload
      ]
    });
  }
}
