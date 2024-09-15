"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractResume = void 0;
const extractResume = (text) => {
    const cleanedString = text.replace(/^\`\`\`json\s*/, '').replace(/\s*\`\`\`$/, '');
    const jsonObject = JSON.parse(cleanedString);
    return jsonObject;
};
exports.extractResume = extractResume;
//# sourceMappingURL=extract-resume.utils.js.map