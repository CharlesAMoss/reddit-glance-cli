const request = require('request')
const rp = require('request-promise')
const prettyjson = require('prettyjson')
const chalk = require('chalk');

// urls for sub reddits
const redditP = "https://www.reddit.com/r/politics.json"
const redditSc = "https://www.reddit.com/r/SquardedCircle.json"

// colors are for prettyjson
const colors = { noColor: true }

// options are the first arrg for the request function
const options = {
  url: redditP,
  headers: {
    'User-Agent': 'request'
  },
  json: true
};

rp(options)
  .then(function (parsedBody) {
    const redditPosts = parsedBody.data.children
    let titles = redditPosts
      .map((n) => `${n.data.title}https://www.reddit.com/${n.data.permalink}`)
      // .filter((n) => n.includes('Observer'))

    console.log(chalk.yellow(prettyjson.render(titles, colors)))
  })
  .catch(function (err) {
    console.log(chalk.red('nope'))
  });
