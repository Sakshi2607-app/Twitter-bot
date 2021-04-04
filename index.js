console.log("Bot is starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

// var params ={
//     q: 'rainbow', 
//     count: 5
// }

// T.get('search/tweets', params, gotData);
//  function gotData(err, data, response) {
//      var tweets = data.statuses;
//      for(var i=0; i<tweets.length; i++)
//     console.log(tweets[i].text);
//   }

TweetIt();
setInterval(TweetIt,1000*20)

function TweetIt(){
    var r = Math.floor(Math.random()*100);
var tweet = {
    status: 'GoodEvening :)))))! #codingRainbow and here is a random number '+r+' #saks26'
}

T.post('statuses/update', tweet, tweeted);


 function tweeted(err, data, response) {
     if(err){
         console.log("Something goes wrong");
        // console.log(err);
     }else{
     console.log("It worked!")
     }
  }
}