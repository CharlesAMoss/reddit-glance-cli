const request = require('request-promise')
const prettyjson = require('prettyjson')

// urls for sub reddits
const redditP = "https://www.reddit.com/r/politics.json"
const redditSc = "https://www.reddit.com/r/SquardedCircle.json"

// colors are for prettyjson
const colors = {
  keysColor: 'green',
  dashColor: 'magenta',
  stringColor: 'yellow',
}

// options are the first arrg for the request function
const options = {
  url: redditP,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const redditPosts = body.data.children
    let titles = redditPosts
      .map((n) => `${n.data.title} https://www.reddit.com/${n.data.permalink}` )
      // .filter((n) => n.includes('Observer'))
    console.log(prettyjson.render(titles, colors))
  }
}

request(options, callback);
