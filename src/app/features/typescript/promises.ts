export class DemoPromisses {
  public testSuccessPromise(): void {
    const promise = new Promise((resolve, reject) => {
      resolve(123);
    });
    promise.then(res => {
      console.log('I got called: ', res === 123);
    });
    promise.catch(err => {
      // this is never called
    });
  }

  public testErrorPromise(): void {
    const promise = new Promise((resolve, reject) => {
      reject(new Error('Something awful happened'));
    });
    promise.then(res => {
      // this is never called
    });
    promise.catch(err => {
      console.log('I get called: ', err.message);
    });
  }

  public promiseChainability(): void {
    // create a resolved promise
    Promise.resolve(123)
      .then(res => {
        console.log(res); // 123
        // return number
        return 456;
      })
      .then(res => {
        console.log(res); // 456
        // return a new resolved promise
        return Promise.resolve(333);
      })
      .then(res => {
        console.log(res); // 333
        // return a number
        return 444;
      });
  }

  public promiseErrorHandling(): void {
    Promise.reject(new Error('something bad happened'))
      .then(res => {
        console.log(res); // not called
        return 456;
      })
      .then(res => {
        console.log(res); // not called
        return 123;
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  public promiseInTypescript(): void {
    Promise.resolve(123)
      // promise as a number
      .then(res => {
        console.log('type of res = ' + typeof res);
        return true;
      })
      // promise as boolean
      .then(res => {
        console.log('type of res = ' + typeof res);
      });
  }
}
