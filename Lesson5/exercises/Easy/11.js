
class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    [this.horizontalRule(), this.emptyLine(), this.messageLine(),
      this.emptyLine(), this.horizontalRule()].forEach(line => {
      return line;
    });
  }

  horizontalRule() {
    console.log(`+${'-'.repeat(this.message.length + 2)}+`);
  }

  emptyLine() {
    console.log(`| ${' '.repeat(this.message.length)} |`);
  }

  messageLine() {
    console.log(`| ${this.message} |`);
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();