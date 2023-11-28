const active = (inputData['days-active'][inputData['day']].toLowerCase() === 'y');
let msg = inputData['unformatted'];

for (let i = 0; i < 10; i++) {
    msg = msg.replace(`<<${i}>>`, inputData[`${i}`]);
}

return { message: msg, channel: inputData['channel'], active: active };