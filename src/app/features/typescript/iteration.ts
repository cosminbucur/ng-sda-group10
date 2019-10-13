export class DemoIteration {
  // ES5
  public testFor(): void {
    console.log('for:');
    var array = [1, 2, 3];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  public testForInObject(): void {
    console.log('for in:');
    var myObject = { a: 1, b: 2 };
    for (let property in myObject) {
      console.log(property);
    }
  }

  public testForInArray(): void {
    console.log('for in array:');
    const myArray = [10, 20, 30];
    for (let index in myArray) {
      console.log(index + '-' + typeof index);
    }
  }

  // ES6
  public testForOf(): void {
    console.log('for of:');
    const myArray = [10, 20, 30];
    for (const value of myArray) {
      console.log(value + '-' + typeof value);
    }
  }
}
