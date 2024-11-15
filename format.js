exports.main = async ({ day, days_active, unformatted, channels, cells }) => {
    // day assumes starting at one, whereas we want it to be zero indexed
    const active = (days_active[day-1].toLowerCase() === 'y');
    const ASCII_A = 'A'.charCodeAt(0); // 65

    let msg = unformatted;

    for (let i = 0; i < 10; i++) {
        let current_col = `col_${String.fromCharCode(ASCII_A+i)}`
        msg = msg.replace(`<<${current_col}>>`, `${cells[current_col]}`);
    }

    return { message: msg, channel: channels, active: active };
}