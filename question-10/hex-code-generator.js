arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();