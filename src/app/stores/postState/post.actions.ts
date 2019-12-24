export const EDIT_TEXT  = '[Post] Edit';
export const UPVOTE     = '[Post] Upvote';
export const DOWNVOTE   = '[Post] Downvote';
export const RESET      = '[Post] Reset';

export class EditText {
  static readonly type = EDIT_TEXT;
  constructor(public payload: string) {}
}

export class Upvote {
  static readonly type = UPVOTE;
}

export class Downvote {
  static readonly type = DOWNVOTE;
}

export class Reset {
  static readonly type = RESET;
}
