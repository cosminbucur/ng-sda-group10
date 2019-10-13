export class DemoVariables {
  name = 'Paul';
  age = 36;
  married = true;
  itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
  brands: string[] = ['Apple', 'Dell', 'HP'];

  public declareVariables(): void {
    console.log(this.itCompanies);
  }
}
