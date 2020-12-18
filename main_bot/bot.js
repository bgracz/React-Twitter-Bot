var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);
var fs = require('fs');

setInterval(tweeter, 5000);

tweeter();

function tweeter() {
  T.get('search/tweets', { q: 'cyberpunk2077 since:2020-12-1', count: 1 }, function(err, data, response) {

    var tw = JSON.stringify(data.statuses[0].text);
    var user = JSON.stringify(data.statuses[0].user.name);
    var userDescription = JSON.stringify(data.statuses[0].user.description);

    fs.writeFileSync("./twitterlive/src/twit.js", "const Twit = [{text:" + tw + "},{user:" + user + "},{userDescription:" + userDescription + "}]; export default Twit;");
  });
}
