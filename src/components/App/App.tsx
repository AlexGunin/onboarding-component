import React, { useState } from 'react';
import { HelpSequence, SequenceItem } from '../HelpSequence/HelpSequence';
import { useKeyboardEvent } from 'use-keyboard-event';

const sequence: SequenceItem[] = [
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
  const [isOpenSequence, setIsOpenSequence] = useState(false);
  const unsubscribe = useKeyboardEvent({
    shortcut: 't-t-t',
    cb: () => {
      console.log('T-T-T');
    }
  });
  const unsubscribe2 = useKeyboardEvent({
    shortcut: 'a',
    cb: () => {
      console.log('A');
    }
  });
  return (
    <div style={{ height: 800 }}>
      {/* <button type="button" onClick={() => setIsOpenSequence((prev) => !prev)}> */}
      {/*   Toggle */}
      {/* </button> */}
      {/* <div className="test box-1">Tuda</div> */}
      {/* <div className="test box-2">Tuda1</div> */}
      {/* <div className="test box-3">Tuda2</div> */}
      {/* <div className="test box-4">Tuda3</div> */}

      {/* <HelpSequence */}
      {/*   sequence={sequence} */}
      {/*   isOpen={isOpenSequence} */}
      {/*   defaultPlacement="top-start" */}
      {/*   startPosition={1} */}
      {/* /> */}
    </div>
  );
}
