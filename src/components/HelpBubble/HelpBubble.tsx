import { Popper } from '../Popper/Popper';
import { PopperPlacement } from '../../types';
import { SequenceItem } from '../HelpSequence/HelpSequence';

interface HelpBubbleProps extends SequenceItem {
  isOpen: boolean;
  onClose: () => void;
  nextLabel?: string;
  previousLabel?: string;
  placement?: PopperPlacement;
}

export function HelpBubble({
  forElement,
  isOpen,
  onClose,
  nextLabel,
  previousLabel,
  placement,
  content,
}: HelpBubbleProps) {
  const Element = forElement ? document.querySelector(forElement) : null;
  console.log('ELEMENT', Element);
  return Element ? (
    <Popper isOpen={isOpen} placement={placement}>
      <button onClick={onClose} type="button">
        Close
      </button>
      {content}
      <div>
        {!!previousLabel && <div>Prev</div>}
        {!!nextLabel && <div>Next</div>}
      </div>
    </Popper>
  ) : null;
}
