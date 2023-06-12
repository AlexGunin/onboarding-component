import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useKeyboardEvent } from 'use-keyboard-event';
var sequence = [
    {
        forElement: '.test',
        content: 'test',
    },
    {
        forElement: '.test1',
        content: 'test1',
    },
    {
        forElement: '.test2',
        content: 'test2',
    },
    {
        forElement: '.test3',
        content: 'test3',
    },
];
export function App() {
    var _a = useState(false), isOpenSequence = _a[0], setIsOpenSequence = _a[1];
    var unsubscribe = useKeyboardEvent({
        shortcut: 't-t-t',
        cb: function () {
            console.log('T-T-T');
        }
    });
    var unsubscribe2 = useKeyboardEvent({
        shortcut: 'a',
        cb: function () {
            console.log('A');
        }
    });
    return (_jsx("div", { style: { height: 800 } }));
}
