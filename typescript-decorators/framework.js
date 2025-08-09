"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = Injectable;
exports.Inject = Inject;
exports.Controller = Controller;
exports.Get = Get;
exports.startApp = startApp;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const pathForControllerCtor = new Map();
const constructorForLabel = new Map();
function Injectable(label) {
    return function (target, context) {
        console.log(`@Injectable - Registering class with label: ${label}`);
        constructorForLabel.set(label, target);
    };
}
function Inject(name) {
    return function (target, context) {
        console.log(`@Inject - Injecting dependency: ${name}`);
        return () => {
            console.log('Init for the name: ', name);
            const targetCtor = constructorForLabel.get(name);
            const newInstance = new targetCtor();
            return newInstance;
        };
    };
}
function Controller(urlPath) {
    return function (target, context) {
        console.log(`@Controller - Registering a controller for path: ${urlPath}`);
        pathForControllerCtor.set(target, urlPath);
        return target;
    };
}
function Get(subPath) {
    return function (target, context) {
        console.log(`@Get - Registering a GET handler for controller: ${target.constructor.name}`);
        context.addInitializer(function () {
            const controllerPath = pathForControllerCtor.get(this.constructor);
            if (!controllerPath)
                throw new Error(`Controller for type ${this.constructor.name} not registered`);
            const fullPath = controllerPath + subPath;
            console.log(`@Get - Registering a handler for path ${fullPath}`);
            app.get(fullPath, (req, res) => {
                const endpointResponse = target.call(this);
                res.json(endpointResponse);
            });
        });
        return target;
    };
}
function startApp() {
    console.log(`Starting app`);
    for (const controllerCtor of pathForControllerCtor.keys()) {
        const _ = new controllerCtor();
    }
    app.listen(port, function () {
        console.log(`Started express server on port ${port}`);
    });
}
