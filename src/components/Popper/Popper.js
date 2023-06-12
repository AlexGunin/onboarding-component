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
import { jsx as _jsx } from "react/jsx-runtime";
export function Popper(_a) {
    var children = _a.children, isOpen = _a.isOpen, anchorEl = _a.anchorEl, placement = _a.placement;
    return isOpen ? (_jsx("div", __assign({ "data-anchor": anchorEl, "data-placement": placement }, { children: children }))) : null;
}
