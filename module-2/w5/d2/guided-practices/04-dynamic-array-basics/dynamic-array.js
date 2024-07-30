// let arr = [];

class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    // this.data[0] = 99;//
    // console.log(this.data[1]);
    // console.log(this.data[index])
    // return this.data[]
    // 5 > 1
    if (index >= this.length) return undefined;

    return this.data[index];
  }

  /*
  this.capacity = 4
  this.length = 0
  val = 1
   [ <empty items>, <empty items>, <empty items>, <empty items> ]

  */
  unshift(val) {
    // Your code here
    // console.log(this.data);// [ 1, 2, 3, <1 empty item> ]
    /*
      length 4
        0  1  2         3          4
      [ 1, 2, 3, <1 empty item> ]
      [ 1, 2, 3, 3 ]
      [ 1, 2, 2, 3 ]
      [ 1, 1, 2, 3 ]

      length 4
      capacity = 4
      length > capacity
      [1,2,3,4]

      length = 4
      0
      [1,2,3,4,5,-,-,-,]

    */
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;

    this.length++;
    return this.length;
  }
}

// const dynamicArr = new DynamicArray();
// dynamicArr.data[0] = 1;
// dynamicArr.data[1] = 2;
// dynamicArr.data[2] = 3;
// dynamicArr.length = 3;
// // console.log(dynamicArr);

// console.log(dynamicArr.unshift(0));
// console.log(dynamicArr.data);
// console.log(dynamicArr.read(1));
/*

DynamicArray { data: [ <3 empty items>, 1 ], length: 0 }


*/
module.exports = DynamicArray;
