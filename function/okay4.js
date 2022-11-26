
     let ladder = {
        step: 0,
        up() {
          this.step++;
        },
        down() {
          this.step--;
        },
        showStep: function() { 
          console.log( this.step );
        }
      };
    
      ladder.showStep(); // 0
    ladder.up();
    ladder.up();
    ladder.showStep(); // 2
    ladder.down();
    ladder.showStep(); // 1
     
     
     
     
    /*
   const menu = {
        width: 200,
        height: 300,
        title: "mymenu"
    
        }
     
     function multiplyNumeric(width, height, title) {
    for (let i in menu) {
    if (typeof menu[i] == 'number') {
    menu[i] *= 2;
    console.log(this);
      }
    }
    return this;
  }
  menu.multiplyNumeric()

*/