import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import { ItemStatisticsProps } from 'interfaces/portfolio/portfolio.interfaces';
import Image from 'next/image';
import { listStatistics } from './utils/listItemStatistics';

const ItemStatistic = ({
  icon,
  number,
  content,
  index,
}: ItemStatisticsProps) => {
  const lastOne = (index ?? 0) + 1 < listStatistics.length;

  return (
    <article
      className={`w-full lg:w-1/3 flex justify-center items-center gap-x-5 ${
        lastOne ? 'lg:border-r-2 lg:border-white' : ''
      }`}
    >
      <div className="w-[100px] h-[55px] flex justify-center items-center">
        <Image
          alt="statistic"
          src={`/assets/icons/${icon}`}
          width={55}
          height={55}
        />
      </div>
      <div className="w-[100px]">
        <Subtitle>{number}+</Subtitle>
        <P>{content}</P>
      </div>
    </article>
  );
};

export default ItemStatistic;
