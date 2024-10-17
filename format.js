exports.main = async ({ day, days_active, unformatted, channels, cells }) => {
const active = (days_active[day].toLowerCase() === 'y');
const ASCII_A = 'A'.charCodeAt(0); // 65

let msg = unformatted;

for (let i = 0; i < 10; i++) {
  let current_col = `col_${String.fromCharCode(ASCII_A+i)}`
  msg = msg.replace(`<<${current_col}>>`, `${cells[current_col]}`);
}
return { message: msg, channel: channels, active: active };
}