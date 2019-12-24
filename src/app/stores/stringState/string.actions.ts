export const ADD      = '[String] Add';

export class AddString {
  static readonly type = ADD;

  constructor(public payload: string) {}
}
