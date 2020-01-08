function LCS(x, y) {
    const xSubstr = x.substr(0, x.length - 1);
    const ySubstr = y.substr(0, y.length - 1);
    if (x.length === 0 || y.length === 0) {
        return '';
    } else if (x.charAt(x.length - 1) === y.charAt(y.length - 1)) {
        return LCS(xSubstr, ySubstr) + x.charAt(x.length - 1);
    } else {
        const a = LCS(x, ySubstr);
        const b = LCS(xSubstr, y);
        return (a.length > b.length) ? a : b;
    }
}