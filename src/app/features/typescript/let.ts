export class DemoLet {

    public testLocalVariables(): void {
        let numberArray: number[] = [];

        for (let i = 0; i < 5; i++) {
            numberArray.push(i);
        }

        numberArray.forEach(element => console.log(element));
    }
}
