export default class Topic {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  slug = (): string => {
    return this.text.toLowerCase().replace(/\W+/, '-');
  }
}
