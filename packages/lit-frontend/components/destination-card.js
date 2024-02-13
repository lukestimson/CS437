"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var decorators_js_2 = require("lit/decorators.js");
var DestinationCard = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('destination-card')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _cost_decorators;
    var _cost_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _season_decorators;
    var _season_initializers = [];
    var _activities_decorators;
    var _activities_initializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var DestinationCard = _classThis = /** @class */ (function (_super) {
        __extends(DestinationCard_1, _super);
        function DestinationCard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _title_initializers, ''));
            _this.cost = __runInitializers(_this, _cost_initializers, '');
            _this.type = __runInitializers(_this, _type_initializers, '');
            _this.season = __runInitializers(_this, _season_initializers, '');
            _this.activities = __runInitializers(_this, _activities_initializers, '');
            _this.imageUrl = __runInitializers(_this, _imageUrl_initializers, '');
            return _this;
        }
        DestinationCard_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <img src=\"", "\" alt=\"", "\">\n      <div class=\"card-header\">\n        <h2>", "</h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/money.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/destination.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/season.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/activities.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n      </div>\n    "], ["\n      <img src=\"", "\" alt=\"", "\">\n      <div class=\"card-header\">\n        <h2>", "</h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/money.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/destination.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/season.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n        <div class=\"card-info\">\n          <svg class=\"icon\"><use href=\"/icons/activities.svg\"></use></svg>\n          <span>", "</span>\n        </div>\n      </div>\n    "])), this.imageUrl, this.title, this.title, this.cost, this.type, this.season, this.activities);
        };
        return DestinationCard_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DestinationCard");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, decorators_js_2.property)({ type: String })];
        _cost_decorators = [(0, decorators_js_2.property)({ type: String })];
        _type_decorators = [(0, decorators_js_2.property)({ type: String })];
        _season_decorators = [(0, decorators_js_2.property)({ type: String })];
        _activities_decorators = [(0, decorators_js_2.property)({ type: String })];
        _imageUrl_decorators = [(0, decorators_js_2.property)({ type: String })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cost_decorators, { kind: "field", name: "cost", static: false, private: false, access: { has: function (obj) { return "cost" in obj; }, get: function (obj) { return obj.cost; }, set: function (obj, value) { obj.cost = value; } }, metadata: _metadata }, _cost_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _season_decorators, { kind: "field", name: "season", static: false, private: false, access: { has: function (obj) { return "season" in obj; }, get: function (obj) { return obj.season; }, set: function (obj, value) { obj.season = value; } }, metadata: _metadata }, _season_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _activities_decorators, { kind: "field", name: "activities", static: false, private: false, access: { has: function (obj) { return "activities" in obj; }, get: function (obj) { return obj.activities; }, set: function (obj, value) { obj.activities = value; } }, metadata: _metadata }, _activities_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DestinationCard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        :host {\n            display: block;\n            margin-bottom: 20px;\n            border-radius: 10px;\n            overflow: hidden;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            transition: transform 0.3s ease;\n            background-color: var(--background-color);\n            color: var(--text-color);\n        }\n        :host(:hover) {\n            transform: translateY(-5px);\n        }\n        .card-header {\n            padding: 20px;\n            background-color: var(--header-bg-color);\n            color: var(--header-text-color);\n        }\n        .card-body {\n            padding: 20px;\n        }\n        h2 {\n            margin: 0;\n        }\n        .card-info {\n            display: flex;\n            align-items: center;\n            margin: 10px 0;\n        }\n        .icon {\n            fill: var(--text-color);\n            margin-right: 10px;\n        }\n        img {\n            width: 100%;\n            height: auto;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n        }\n    "], ["\n        :host {\n            display: block;\n            margin-bottom: 20px;\n            border-radius: 10px;\n            overflow: hidden;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            transition: transform 0.3s ease;\n            background-color: var(--background-color);\n            color: var(--text-color);\n        }\n        :host(:hover) {\n            transform: translateY(-5px);\n        }\n        .card-header {\n            padding: 20px;\n            background-color: var(--header-bg-color);\n            color: var(--header-text-color);\n        }\n        .card-body {\n            padding: 20px;\n        }\n        h2 {\n            margin: 0;\n        }\n        .card-info {\n            display: flex;\n            align-items: center;\n            margin: 10px 0;\n        }\n        .icon {\n            fill: var(--text-color);\n            margin-right: 10px;\n        }\n        img {\n            width: 100%;\n            height: auto;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n        }\n    "])));
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DestinationCard = _classThis;
}();
var templateObject_1, templateObject_2;
