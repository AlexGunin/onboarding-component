var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popper } from '../Popper/Popper';
export function HelpBubble(_a) {
    var forElement = _a.forElement, isOpen = _a.isOpen, onClose = _a.onClose, nextLabel = _a.nextLabel, previousLabel = _a.previousLabel, placement = _a.placement, content = _a.content;
    var Element = forElement ? document.querySelector(forElement) : null;
    console.log('ELEMENT', Element);
    return Element ? (_jsxs(Popper, __assign({ isOpen: isOpen, placement: placement }, { children: [_jsx("button", __assign({ onClick: onClose, type: "button" }, { children: "Close" })), content, _jsxs("div", { children: [!!previousLabel && _jsx("div", { children: "Prev" }), !!nextLabel && _jsx("div", { children: "Next" })] })] }))) : null;
}
