const accountId = 123456
let accountName = "Akshay"
var accountEmail = "akshay@gmail.com"

/*
Prefer not use to var keyword for declaring varibles
Because of issue in block scope and functional scope.
*/

accountCity = "Akole" // Without using any keyword before variable name can be allowed in JS. But prefer to not use this.

let accountState ;   // If we only define varible and not assign value to that variable then it print as an output Undefined.


// accountId = 1  
// Const variable value can not be change. It is not allowed in JS

accountName = "Ajay"
accountEmail = "ajay@gmail.com"
accountCity = "Loni"
console.table([accountId, accountName, accountEmail, accountCity, accountState])