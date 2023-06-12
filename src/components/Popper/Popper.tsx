import { ReactNode } from 'react';
import { PopperPlacement } from '../../types';

interface PopperProps {
  children: ReactNode;
  isOpen: boolean;
  anchorEl?: ReactNode;
  placement?: PopperPlacement;
}

export function Popper({
  children,
  isOpen,
  anchorEl,
  placement,
}: PopperProps) {
  return isOpen ? (
    <div data-anchor={anchorEl} data-placement={placement}>
      {children}
    </div>
  ) : null;
}
