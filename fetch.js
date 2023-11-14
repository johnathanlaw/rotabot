// Fetch the file specified below, and return its content. See https://github.com/johnathanlaw/rotabot/blob/main/fetch.js
const fileUrl = 'https://raw.githubusercontent.com/johnathanlaw/rotabot/main/config.json';
const response = await fetch(fileUrl).then(function (res) {
  // Success! Return the configuration
  return res.json();
}).then(function (json) {
  callback(null, json);
});