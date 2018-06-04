/**
 * @param {number} value
 * @returns {number}
 */
function normalizeRgbaValue (value) {
    return Math.round(value);
}

/**
 * @param {{red: number, green: number, blue: number, alpha: number}} msColor
 * @returns {[number,number,number,number]}
 */
exports.msColorToRgba = function (msColor) {
    const r = normalizeRgbaValue(msColor.red * 255);
    const g = normalizeRgbaValue(msColor.green * 255);
    const b = normalizeRgbaValue(msColor.blue * 255);
    const a = normalizeRgbaValue(msColor.alpha * 100);

    return [r, g, b, a];
};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @returns {{red: number, green: number, blue: number, alpha: number}}
 */
exports.rgbaToMSColor = function (r, g, b, a) {
    return {
        red: r / 255,
        green: g / 255,
        blue: b / 255,
        alpha: a / 100
    };
};
