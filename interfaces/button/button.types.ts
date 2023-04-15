import {
  BoldButtonKind,
  ColorButtonKind,
  RoundedButtonKind,
} from './button.enum';

export type FullRoundedButton =
  | RoundedButtonKind.full
  | RoundedButtonKind.medium
  | RoundedButtonKind.none;

export type ColorButton =
  | ColorButtonKind.primary
  | ColorButtonKind.whiteTransparent;

export type BoldButton =
  | BoldButtonKind.bold
  | BoldButtonKind.extraBold
  | BoldButtonKind.normal;
