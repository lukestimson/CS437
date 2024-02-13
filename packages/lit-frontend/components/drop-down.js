"use strict";
/* The drop-down component is  responsible for controlling the visibility of the dropdown menu.
It acts as a container for both the trigger element (icon that users click to open the dropdown)
and the dropdown content itself (the menu).  */
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
exports.DropDownElement = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
require("./user-panel"); // Import the user-panel component
var DropDownElement = function () {
    var _classDecorators = [(0, decorators_js_1.customElement)('drop-down')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = lit_1.LitElement;
    var DropDownElement = _classThis = /** @class */ (function (_super) {
        __extends(DropDownElement_1, _super);
        function DropDownElement_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.open = false;
            return _this;
        }
        DropDownElement_1.prototype.render = function () {
            return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      <div class=\"profile-icon\" @click=\"", "\"></div>\n      ", " \n    "], ["\n      <div class=\"profile-icon\" @click=\"", "\"></div>\n      ", " \n    "])), this.toggleDropdown, this.open ? (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<user-panel class=\"menu\"></user-panel>"], ["<user-panel class=\"menu\"></user-panel>"]))) : (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))));
        };
        DropDownElement_1.prototype.toggleDropdown = function () {
            this.open = !this.open;
            this.setAttribute('open', this.open.toString()); // Reflects the state to an attribute
            this.requestUpdate(); // Requests an update for re-rendering
        };
        return DropDownElement_1;
    }(_classSuper));
    __setFunctionName(_classThis, "DropDownElement");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DropDownElement = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.styles = (0, lit_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    :host {\n      display: block;\n      position: relative;\n      cursor: pointer;\n    }\n    .profile-icon {     /* This style is referenced from index.html within the drop-down comp */\n      width: 50px; /* Adjust size as needed */\n      height: 50px;\n      border-radius: 50%;\n      background-image: url('/images/profilePhoto.jpg');\n      background-size: cover;\n      border: 3px solid white; /* Optional: style as needed */\n    }\n    .menu {\n      display: none;\n      position: absolute;\n      top: 120%;\n      right: 0; /* Aligns the menu to the right edge of the profile icon */\n      border: 3px solid;\n      background: var(--header-bg-color);\n      z-index: 100; /* Ensure dropdown is above other content */\n    }\n    :host([open]) .menu {           /* When open is set, the drop down is opened */\n      display: block;\n    }\n  "], ["\n    :host {\n      display: block;\n      position: relative;\n      cursor: pointer;\n    }\n    .profile-icon {     /* This style is referenced from index.html within the drop-down comp */\n      width: 50px; /* Adjust size as needed */\n      height: 50px;\n      border-radius: 50%;\n      background-image: url('/images/profilePhoto.jpg');\n      background-size: cover;\n      border: 3px solid white; /* Optional: style as needed */\n    }\n    .menu {\n      display: none;\n      position: absolute;\n      top: 120%;\n      right: 0; /* Aligns the menu to the right edge of the profile icon */\n      border: 3px solid;\n      background: var(--header-bg-color);\n      z-index: 100; /* Ensure dropdown is above other content */\n    }\n    :host([open]) .menu {           /* When open is set, the drop down is opened */\n      display: block;\n    }\n  "])));
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DropDownElement = _classThis;
}();
exports.DropDownElement = DropDownElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
