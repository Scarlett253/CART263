class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context, analyser, dataArray) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = .07;
    this.context = context;
    this.analyser = analyser;
    this.dataArray = dataArray;
    this.volume = 0;

  }

  display() {
    this.theta = 0; //reset everytime
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(this.x, this.y)
    for (let i = this.x; i < this.x + this.length; i++) {
      this.context.lineTo(i, (Math.sin(this.theta) * this.yOffset) + this.y)
      this.context.lineTo(i, (Math.sin(this.theta) * 5) + this.y + this.yOffset)
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); //set the stroke
  }

  update() {
    if (window.analyser && window.dataArray) {
      this.analyser = window.analyser;
      this.dataArray = window.dataArray;

      let sum = 0;
      for (let i = 0; i < this.dataArray.length; i++) {
        sum += this.dataArray[i];
      }

      this.volume = sum / this.dataArray.length;
    }

    //Mic effects
    //changes
    this.yOffset = this.volume * 0.5;
    //waves
    this.angularSpeed = 0.01 + this.volume * 0.002;

    //Color reacts
    let r = Math.min(255, this.volume * 2);
    this.fill_color = `rgb(${r}, 100, 255)`;

    //Animation
    //moves sideways
    this.x += 1;

    //loop back
    if (this.x > 400) {
      this.x = 0;
    }
  }
}
