import {
  TextAlignEnum,
  TextBoldEnum,
  TextColorEnum,
  TextSizeEnum,
} from 'interfaces/text/text.enums';

export const textAlignMap = new Map<TextAlignEnum, string>();
textAlignMap.set(TextAlignEnum.center, 'text-center');
textAlignMap.set(TextAlignEnum.left, 'text-left');
textAlignMap.set(TextAlignEnum.right, 'text-right');

export const textWeigthMap = new Map<TextBoldEnum, string>();
textWeigthMap.set(TextBoldEnum.bold, 'font-bold');
textWeigthMap.set(TextBoldEnum.normal, 'font-normal');
textWeigthMap.set(TextBoldEnum.semiBold, 'font-semibold');
textWeigthMap.set(TextBoldEnum.light, 'font-light');

export const textSizesMap = new Map<TextSizeEnum, string>();
textSizesMap.set(TextSizeEnum.sm, 'text-lg');
textSizesMap.set(TextSizeEnum.lg, 'text-2xl');
textSizesMap.set(TextSizeEnum.xl, 'text-4xl');

export const textColorMap = new Map<TextColorEnum, string>();
textColorMap.set(TextColorEnum.primary, 'text-primary');
textColorMap.set(TextColorEnum.white, 'text-white');
