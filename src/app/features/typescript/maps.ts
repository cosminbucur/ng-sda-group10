export class DemoMaps {
  public testMap(): void {
    // set
    let map1 = new Map()
      .set('A', 1)
      .set('B', 2)
      .set('C', 3);

    let map2 = new Map([['A', 1], ['B', 2], ['C', 3]]);

    // get
    console.log('get A: ' + map1.get('A'));

    // has
    console.log('has A: ' + map1.has('A'));

    // delete
    map1.delete('A');

    // size
    console.log('map size = ' + map1.size);

    // clear
    map1.clear();
    console.log('map size = ' + map1.size);

    let map = new Map([ 
        ['APPLE', 1], 
    ['ORANGE', 2], 
    ['MANGO', 3] ]);
    this.loopMapUsingKeys(map);
    this.loopMapUsingValues(map);
    this.loopMapUsingEntries(map);
    this.loopMap(map);
  }

  private loopMapUsingKeys(map: Map<any, any>): void {
    console.log('loop using keys');
    for (let key of map.keys()) {
        console.log(key);
    }
  }

  private loopMapUsingValues(map: Map<any, any>): void {
    console.log('loop using values');
    for (let key of map.values()) {
        console.log(key);
    }
  }

  private loopMapUsingEntries(map: Map<any, any>): void {
    console.log('loop using entries');
    for (let entry of map.entries()) {
        console.log(entry[0], entry[1]);
    }
  }

  private loopMap(map: Map<any, any>): void {
    console.log('loop map');
    for (let [key, value] of map) {
        console.log(key, value);
    }
  }
}
