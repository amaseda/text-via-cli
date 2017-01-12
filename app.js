let config = require("./env.js")
let favorites = require("./favorites.js")
let twilio = require("twilio")(config.accountSid, config.authToken)

let destination = favorites[process.argv[2].toLowerCase()]  // name inputs will be verified as lowercase
  ? favorites[process.argv[2]]
  : process.argv[2]

twilio.messages.create({
  to: destination,
  from: config.number,
  body: process.argv[3]
}, (err, msg) => {
  if(err){ console.log("error: ", err) }
  process.exit()
})
