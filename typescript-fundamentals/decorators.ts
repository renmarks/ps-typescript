import { replace } from "lodash";

export function logMethodInfo(origMethod: any, _context: ClassMethodDecoratorContext) {
    function replacementMethod(this:any, ...args: any[]) {
        console.log(`Decorated construct: ${_context.kind}`);
        console.log(`Decorated Method name: ${_context.name as string}`);
        
        const result = origMethod.call(this, ...args);
    }
    return replacementMethod;
}