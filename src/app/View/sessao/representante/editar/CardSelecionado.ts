

export class CardSelecionado{
  toggle:boolean = true;
  status: string;

  constructor() {
    this.toggle = true;
    this.status = 'noClick';
  }

  public enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'yesClick' : 'noClick';
  }

}
