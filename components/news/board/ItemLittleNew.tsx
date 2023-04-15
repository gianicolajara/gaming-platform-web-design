import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import { ItemNewsProps } from 'interfaces/news/news.interfaces';
import Image from 'next/image';

const ItemLittleNew = ({ img, colorEditor }: ItemNewsProps) => {
  return (
    <article className="flex flex-col xl:flex-row gap-x-5">
      <div className="xl:w-[195px] h-[195px] flex-grow flex-shrink-0 rounded-2xl overflow-hidden w-full">
        <Image
          alt="new-image"
          src={`/assets/images/${img}`}
          width={195}
          height={195}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-x-3 mt-5">
          <div className={`px-5 py-1 ${colorEditor}`}>
            <small>John Smash</small>
          </div>
          <div>
            <P>.5 min</P>
          </div>
        </div>
        <div>
          <Subtitle>Lorem Ipsum is simply dummy text dummy text ? </Subtitle>
        </div>
      </div>
    </article>
  );
};

export default ItemLittleNew;
