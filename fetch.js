const fileUrl = 'https://raw.githubusercontent.com/johnathanlaw/rotabot/main/main.js';
const response = await fetch(fileUrl).then(function (res) {
  // Success! Return the configuration
  return res.json();
}).then(function (json) {
  callback(null, json);
});