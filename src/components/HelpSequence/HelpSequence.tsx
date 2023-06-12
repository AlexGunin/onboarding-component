import { ReactNode, useState } from 'react';
import { HelpBubble } from '../HelpBubble/HelpBubble';
import { PopperPlacement } from '../../types';

export interface SequenceItem {
  content: ReactNode;
  forElement: string;
  placement?: PopperPlacement;
}

interface HelpSequenceProps {
  sequence: SequenceItem[];
  isOpen: boolean;
  defaultPlacement?: PopperPlacement;
  startPosition?: number;
}

const isVisible = (element: HTMLElement) => Boolean(
  element.offsetWidth
  || element.offsetHeight
  || element.getClientRects().length,
);

const filterSequenceItem = (item: SequenceItem) => {
  if (!item.forElement) return false;

  const element = document.querySelector(item.forElement);

  if (!element) return false;

  return isVisible(element as HTMLElement);
};

export function HelpSequence({
  isOpen,
  sequence,
  defaultPlacement,
  startPosition,
}: HelpSequenceProps) {
  const [currentPosition, setCurrentPosition] = useState(() => startPosition ?? 0);

  const [currentSequence, setCurrentSequence] = useState<SequenceItem[]>(
    () => (sequence ? sequence.filter(filterSequenceItem) : []),
  );

  const currentItem = currentSequence[currentPosition];

  const onClose = () => null;

  return isOpen ? (
    <div>
      {!!currentItem && (
        <HelpBubble
          placement={currentItem.placement ?? defaultPlacement}
          forElement={currentItem.forElement}
          isOpen
          onClose={onClose}
          content={currentItem.content}
        />
      )}
    </div>
  ) : null;
}
