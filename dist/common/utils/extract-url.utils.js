"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractUrl = void 0;
const extractUrl = (text) => {
    const pattern = /https:\/\/api\.hh\.ru\/[^\s]*/;
    const match = text.match(pattern);
    return match ? match[0] : null;
};
exports.extractUrl = extractUrl;
//# sourceMappingURL=extract-url.utils.js.map