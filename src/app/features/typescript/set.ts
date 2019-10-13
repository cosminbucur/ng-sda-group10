export class DemoSets {
  public testSets(): void {
    // add
    let set = new Set();
    set.add('APPLE');
    set.add('ORANGE');
    set.add('MANGO');

    let set2 = new Set()
      .add('APPLE')
      .add('ORANGE')
      .add('MANGO');

    let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

    // has
    console.log(set.has('APPLE'));

    // delete
    set.delete('APPLE');

    // size
    console.log(set.size);

    set.clear();
    console.log(set.size);

    for (let entry of set2) {
      console.log(entry);
    }
  }
}
