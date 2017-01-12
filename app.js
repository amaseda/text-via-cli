let config = require("./env.js")
let twilio = require("twilio")(config.accountSid, config.authToken)

twilio.messages.create({
  to: process.argv[2],
  from: config.number,
  body: process.argv[3]
}, (err, msg) => {
  if(err){ console.log("error: ", err) }
  process.exit()
})
