let linebot = require('linebot'),
    express = require('express');

const config = require('./config.json'),
      util = require('util');

let bot = linebot({
    channelId: 'Line Bot Channel ID',
    channelSecret: 'Line Bot Channel Secret',
    channelAccessToken: 'Line Bot Access Token'
});
const linebotParser = bot.parser(),
    app = express();
bot.on('message', function(event) {
    // 把收到訊息的 event 印出來
    console.log(event);
});
app.post('/webhook', linebotParser);
// 在 localhost 走 8080 port

let server = app.listen(process.env.PORT || 8080, function() {
    let port = server.address().port;
    console.log("My Line bot App running on port", port);
});
