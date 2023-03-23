function add (a,b){
    if(typeof a !=='number' || typeof b !== 'number'){
      return 'please enter a number'  
    }
    return a+b;
    
}
const result = add(5,'six');
console.log(result);