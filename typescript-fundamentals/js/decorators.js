"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = logMethodInfo;
function logMethodInfo(origMethod, _context) {
    function replacementMethod(...args) {
        console.log(`Decorated construct: ${_context.kind}`);
        console.log(`Decorated Method name: ${_context.name}`);
        const result = origMethod.call(this, ...args);
    }
    return replacementMethod;
}
//# sourceMappingURL=decorators.js.map