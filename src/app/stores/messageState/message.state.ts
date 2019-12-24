import { State, Action, StateContext  } from '@ngxs/store';

export class Spanish {
  static readonly type = 'SPANISH';
}

export class Franch {
  static readonly type = 'FRENCH';
}

@State<string>({
  name: 'message',
  defaults: 'Hello. I am the default Message'
})
export class MessageState {
  constructor() {}

  @Action(Spanish)
  async spanish(ctx: StateContext<string>, action: Spanish) {
    const state = ctx.getState();
    console.log(action);
    ctx.setState('Hola Mundo');
  }

  @Action(Franch)
  async upvote(ctx: StateContext<string>, action: Franch) {
    const state = ctx.getState();
    console.log(action);
    ctx.setState('Bonjour le monde');
  }
}
