import { TextAlignEnum } from 'interfaces/text/text.enums';
import Image from 'next/image';
import { ItemsIndustryProps } from '../../../interfaces/industry/industry.interfaces';
import P from '../../p';

const ItemIndustry = ({ id, title, icon }: ItemsIndustryProps) => {
  return (
    <li key={id} className="flex flex-col gap-y-5 items-center w-[200px] ">
      <Image alt={title} src={`/assets/icons/${icon}`} width={65} height={65} />
      <P align={TextAlignEnum.center}>{title}</P>
      <Image
        alt="arrow"
        src={`/assets/icons/right-arrow.png`}
        width={21}
        height={21}
      />
    </li>
  );
};

export default ItemIndustry;
