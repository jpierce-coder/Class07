function redundantReturn(str) {
  return () => {
    // const someStr = `${str} is getting logged to the console.`
    // console.log(str);
    return ()=>{
      return str;
    };
  }
}
 // returns a function

// Option 1 
redundantReturn('Hi there')()();

// Option 2
let innerFunction = redundantReturn('Hi there');
let innerMostFunction = innerFunction();
console.log(innerMostFunction())