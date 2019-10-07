import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { Signal } from './signal';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  name = 'Paul';
  age = 36;
  married = true;
  itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
  brands: string[] = ['Apple', 'Dell', 'HP'];

  constructor() {
    this.iterateEnum();
    this.getKeysOfStringEnum();
  }

  ngOnInit() {}

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
