A simple node app that allows you to send a text message to a phone number via the command line. Created for `#100DaysOfCode` (Day 1).

## Quick Start

#### Install

```bash
$ git clone git@github.com:amaseda/text-via-cli.git && cd text-via-cli && npm install
```

#### Set up Twilio Account

Using this app requires a  account and a Twilio phone number. Sign up [here](https://www.twilio.com/).

> Note: Unless you upgrade your Twilio account, you can only send messages to "[Verified Numbers](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-verified-outbound-caller-ID-with-Twilio)."

#### Add Twilio Credentials

Create an `env.js` file in the root directory containing the below Twilio account credentials...

```js
// env.js

module.exports = {
  accountSid: "accountsid-goes-here",
  authToken: "auth-token-goes-here",
  number: "twilio-phone-number-goes-here"
}
```

#### Send a Text

Run the following command via CLI...

```bash
$ node app.js "phone-number" "message-body"
```
> Example phone number: "+12025551234"

## Favorites

#### Add a Favorite

Map a phone number to a nickname by adding an entry to `favorites.js`, like so...

```js
// favorites.js

module.exports = {
  "adrian": "+12025559876"
}
```

#### Send a Text to a Favorite

Using the above example...

```bash
$ node app.js "adrian" "message-body"
```
