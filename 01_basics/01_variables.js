const accountId = 12345
let accountEmail = "shaurya12@gmail.com"
var accountPassword = "234567"
accountCity = "rampur"
let accountState;

//accountId = 56765//not alloud
accountEmail = "dev12@gmail.com"
accountPassword = "2586"
accountCity = "nagpur"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])