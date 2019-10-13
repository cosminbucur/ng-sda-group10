import { DemoPromisses as DemoPromises } from './promises';
import { DemoSets } from './set';
import { DemoMaps } from './maps';
import { DemoIteration } from './iteration';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoFatArrow } from './fat-arrow';
import { DemoStrings } from './strings';
import { DemoVariables } from './variables';
import { DemoConst } from './const';
import { DemoLet } from './let';
import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { Signal } from './signal';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {

  constructor() {
    // this.iterateEnum();
    // this.getKeysOfStringEnum();

    // const demoLet: DemoLet = new DemoLet();
    // demoLet.testLocalVariables();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.testConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoStrings: DemoStrings = new DemoStrings();
    // demoStrings.templateString();
    // demoStrings.variablesSubstitution();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoObjectDestructuring: DemoObjectDestructuring=  new DemoObjectDestructuring();
    // demoObjectDestructuring.objectDestructuring();

    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInObject();
    // demoIteration.testForInArray();
    // demoIteration.testForOf();

    // const demoMaps: DemoMaps = new DemoMaps();
    // demoMaps.testMap();

    // const demoSets: DemoSets = new DemoSets();
    // demoSets.testSets();

    const demoPromises: DemoPromises = new DemoPromises();
    // demoPromises.testSuccessPromise();
    // demoPromises.testErrorPromise();
    // demoPromises.promiseChainability();
    // demoPromises.promiseErrorHandling();
    demoPromises.promiseInTypescript();
  }
}
