// import { css, html, LitElement } from 'lit';
// import { customElement } from 'lit/decorators.js';

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

var UserPanel = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('user-panel')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var UserPanel = _classThis = /** @class */ (function (_super) {
        __extends(UserPanel_1, _super);
        function UserPanel_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserPanel_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <a href=\"/app/profile\">Profile</a>\n      <a href=\"http://www.stimsonphoto.com\" target=\"_blank\">stimsonphoto.com</a>\n      <label class=\"toggle-switch\">\n        <input type=\"checkbox\" @change=\"", "\">\n        <span class=\"slider round\"></span>\n      </label>\n    "], ["\n      <a href=\"/app/profile\">Profile</a>\n      <a href=\"http://www.stimsonphoto.com\" target=\"_blank\">stimsonphoto.com</a>\n      <label class=\"toggle-switch\">\n        <input type=\"checkbox\" @change=\"", "\">\n        <span class=\"slider round\"></span>\n      </label>\n    "])), this.toggleDarkMode);
        };
        UserPanel_1.prototype.toggleDarkMode = function (e) {
            var checked = e.target.checked;
            document.body.classList.toggle('light-mode', checked);
        };
        return UserPanel_1;
    }(_classSuper));
    __setFunctionName(_classThis, "UserPanel");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserPanel = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: block;\n      padding: 10px;\n      background: var(--panel-background-color, black);\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n      min-width: 200px; /* Ensure it's not too narrow */\n    }\n    a {\n      display: block;\n      color: var(--text-color, black);\n      text-decoration: none;\n      padding: 8px 0; /* Add padding for better clickability */\n      text-align: center; /* Center align links */\n    }\n    a:hover {\n      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */\n    }\n\n    /* Adding styles for Toggle functionality */\n\n    .toggle-switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n\n    .toggle-switch input {\n      opacity: 0;\n      width: 0;\n      height: 0;\n    }\n\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n\n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n\n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n\n    .slider.round {\n      border-radius: 34px;\n    }\n\n    .slider.round:before {\n      border-radius: 50%;\n    }\n\n    /* Additional styles as needed */\n    "], ["\n    :host {\n      display: block;\n      padding: 10px;\n      background: var(--panel-background-color, black);\n      box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n      min-width: 200px; /* Ensure it's not too narrow */\n    }\n    a {\n      display: block;\n      color: var(--text-color, black);\n      text-decoration: none;\n      padding: 8px 0; /* Add padding for better clickability */\n      text-align: center; /* Center align links */\n    }\n    a:hover {\n      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */\n    }\n\n    /* Adding styles for Toggle functionality */\n\n    .toggle-switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n\n    .toggle-switch input {\n      opacity: 0;\n      width: 0;\n      height: 0;\n    }\n\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n\n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n\n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n\n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n\n    /* Rounded sliders */\n\n    .slider.round {\n      border-radius: 34px;\n    }\n\n    .slider.round:before {\n      border-radius: 50%;\n    }\n\n    /* Additional styles as needed */\n    "])));
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserPanel = _classThis;
}();
var templateObject_1, templateObject_2;
