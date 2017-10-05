'use strict';

var p = 'global';
function c() {
    let cLocal = 'cLocal';
    return function a() {
        let aLocal = 'aLocal'
        b();
        /*
          Due to JS Scoping feature, b function will search variables in the from its location to the global scope
          this is how JS will search variable references that are not local to it
          b() --> b deinfed in  a() -- >a defined in c() --> c defined in global scope
         */

        function b() {
            // this will point to undefined due to 'use strict'
            console.log(this, p, aLocal, cLocal);
        }
        return b;
    }
}
let aFunc = c();
let cFunc = aFunc();
//Closure: bFunc has reference to aLocal,bLocal  
let bFunc = cFunc();