import { Signal } from './signal';
import { Role } from './role';

export class DemoEnums {

    // iterate enum
  public iterateEnum(): void {
    console.log('iterate enum: ');

    for (const role in Role) {
      if (isNaN(Number(role))) {
        console.log(role);
      }
    }
  }

  public getKeysOfStringEnum(): void {
    console.log('iterate keys of string enum: ');

    Object.keys(Signal).forEach(key => console.log(key));
  }

  public iterateEnumKeys() {
    console.log('iterate enum keys: ');

    Object.keys(Role)
      .filter(key => !isNaN(Number(Role[key])))
      .forEach(key => console.log(Role[key]));
  }
}