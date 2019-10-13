export class DemoStrings {
  public templateString(): void {
    // back tick
    const multiLineString = `
            this
            is
            a multi-line
            string
        `;
    console.log(multiLineString);
  }

  public variablesSubstitution(): void {
    const firstName = 'lebron';
    const lastName = 'james';

    const fullName = `This is ${firstName} ${lastName}`;
    console.log(fullName);
  }
}
