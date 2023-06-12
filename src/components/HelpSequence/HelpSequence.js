import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { HelpBubble } from '../HelpBubble/HelpBubble';
var isVisible = function (element) { return Boolean(element.offsetWidth
    || element.offsetHeight
    || element.getClientRects().length); };
var filterSequenceItem = function (item) {
    if (!item.forElement)
        return false;
    var element = document.querySelector(item.forElement);
    if (!element)
        return false;
    return isVisible(element);
};
export function HelpSequence(_a) {
    var _b;
    var isOpen = _a.isOpen, sequence = _a.sequence, defaultPlacement = _a.defaultPlacement, startPosition = _a.startPosition;
    var _c = useState(function () { return startPosition !== null && startPosition !== void 0 ? startPosition : 0; }), currentPosition = _c[0], setCurrentPosition = _c[1];
    var _d = useState(function () { return (sequence ? sequence.filter(filterSequenceItem) : []); }), currentSequence = _d[0], setCurrentSequence = _d[1];
    var currentItem = currentSequence[currentPosition];
    var onClose = function () { return null; };
    return isOpen ? (_jsx("div", { children: !!currentItem && (_jsx(HelpBubble, { placement: (_b = currentItem.placement) !== null && _b !== void 0 ? _b : defaultPlacement, forElement: currentItem.forElement, isOpen: true, onClose: onClose, content: currentItem.content })) })) : null;
}
