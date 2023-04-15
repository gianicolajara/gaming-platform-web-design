import { IconType } from 'react-icons';
import { BoldButton, ColorButton, FullRoundedButton } from './button.types';

export interface ButtonProps {
  children: React.ReactNode;
  fullRounded?: FullRoundedButton;
  color?: ColorButton;
  weigth?: BoldButton;
  onClick?: () => void;
  Icon?: IconType;
}
