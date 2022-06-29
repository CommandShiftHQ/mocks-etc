class ChristmasBulb {
  constructor() {
    this.isWorking = true;
  }

  electrify() {
    console.log('*twinkles brightly*');
    const colours = ['red', 'blue', 'white', 'green', 'orange'];

    colours.forEach((colour) => {
      console.log(colour);
    });
  }
}

exports.ChristmasBulb = ChristmasBulb;
