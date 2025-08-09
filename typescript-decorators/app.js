"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("./framework");
let CitiesDB = (() => {
    let _classDecorators = [(0, framework_1.Injectable)(`CitiesDB`)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CitiesDB = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CitiesDB = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        getCities() {
            console.log(`ClassDB - Getting a list of cities`);
            return [`New York`, `Los Angeles`, `Chicago`];
        }
    };
    return CitiesDB = _classThis;
})();
let WeatherController = (() => {
    let _classDecorators = [(0, framework_1.Controller)('/api')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getForecast_decorators;
    var WeatherController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getForecast_decorators = [(0, framework_1.Get)('/forecast')];
            __esDecorate(this, null, _getForecast_decorators, { kind: "method", name: "getForecast", static: false, private: false, access: { has: obj => "getForecast" in obj, get: obj => obj.getForecast }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            WeatherController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        getForecast() {
            return ({
                apiVersion: `v1`,
                temperature: 25,
                humidity: 60,
                city: `New York`
            });
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    return WeatherController = _classThis;
})();
let CitiesController = (() => {
    let _classDecorators = [(0, framework_1.Controller)('/api')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _citiesDB_decorators;
    let _citiesDB_initializers = [];
    let _citiesDB_extraInitializers = [];
    let _getCities_decorators;
    var CitiesController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _citiesDB_decorators = [(0, framework_1.Inject)(`CitiesDB`)];
            _getCities_decorators = [(0, framework_1.Get)('/cities')];
            __esDecorate(this, null, _getCities_decorators, { kind: "method", name: "getCities", static: false, private: false, access: { has: obj => "getCities" in obj, get: obj => obj.getCities }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _citiesDB_decorators, { kind: "field", name: "citiesDB", static: false, private: false, access: { has: obj => "citiesDB" in obj, get: obj => obj.citiesDB, set: (obj, value) => { obj.citiesDB = value; } }, metadata: _metadata }, _citiesDB_initializers, _citiesDB_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CitiesController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        citiesDB = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _citiesDB_initializers, void 0));
        getCities() {
            return ({
                cities: this.citiesDB.getCities()
            });
        }
        constructor() {
            __runInitializers(this, _citiesDB_extraInitializers);
        }
    };
    return CitiesController = _classThis;
})();
(0, framework_1.startApp)();
