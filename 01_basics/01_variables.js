const accountId = 123445
let accountEmail = "charan33@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed



accountEmail = "chr@gmail.com"
accountPassword = "22222"
accountCity = "UP"
// possible

let accountState ;

console.log(accountId);


/*prefer not to use var
becouse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
