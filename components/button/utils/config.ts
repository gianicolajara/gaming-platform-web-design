import {
  BoldButtonKind,
  ColorButtonKind,
  RoundedButtonKind,
} from '../../../interfaces/button/button.enum';

export const fullRoundedMap = new Map();
fullRoundedMap.set(RoundedButtonKind.full, 'rounded-full');
fullRoundedMap.set(RoundedButtonKind.medium, 'rounded-lg');
fullRoundedMap.set(RoundedButtonKind.none, 'rounded-none');

export const colorButtonMap = new Map();
colorButtonMap.set(
  ColorButtonKind.primary,
  'bg-primary hover:bg-primary/80 active:brightness-50'
);
colorButtonMap.set(
  ColorButtonKind.whiteTransparent,
  'bg-white/10 hover:bg-white/20 active:brightness-50'
);

export const boldButtonMap = new Map();
boldButtonMap.set(BoldButtonKind.bold, 'font-bold');
boldButtonMap.set(BoldButtonKind.extraBold, 'font-extrabold');
boldButtonMap.set(BoldButtonKind.normal, 'font-normal');
