exports.main = async () => {
    // Fetch the file specified below, and return its content. See https://github.com/johnathanlaw/rotabot/blob/main/fetch.js
    const fileUrl = 'https://raw.githubusercontent.com/johnathanlaw/rotabot/refs/heads/main/workato-config.json';
    const res = await fetch(fileUrl);

    // Return the configuration
    const config = await res.json();
    return config;
}