const accountId = 144553
let accountEmail = "aashish@asshish.com"
var accountPassword = "12345"
accountCity = "hyd"
let accountState;

// accountId = 2 // not allowed


accountEmail = "bpna@bpna.com"
accountPassword = "21212121"
accountCity = "vij"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
