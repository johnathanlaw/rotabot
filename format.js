var active = (inputData['days-active'][inputData['day']].toLowerCase() === 'y');
var msg = inputData['unformatted'];

for (var i = 0; i < 10; i++) {
    msg = msg.replace(`<<${i}>>`, inputData[`${i}`]);
}

return { message: msg, channel: inputData['channel'], active: active };