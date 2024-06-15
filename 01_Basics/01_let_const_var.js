const accountId = 345323
let accountEmail = "shakibajaj@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState;
/*You can reserve memory of a variable without declaring anything
but this is not a good practice
*/
// accountId = 2 not allowed

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/

accountEmail = "armanbazz@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])