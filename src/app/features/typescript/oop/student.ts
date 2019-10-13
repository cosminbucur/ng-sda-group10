import { Person } from './person';

export class Student extends Person {
  course;

  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  whoAreYou(): string {
    return `${super.whoAreYou()} and I'm studying Angular`;
  }
}
