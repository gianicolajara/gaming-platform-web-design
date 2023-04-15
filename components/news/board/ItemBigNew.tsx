import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import { ItemNewsProps } from 'interfaces/news/news.interfaces';
import Image from 'next/image';

const ItemBigNew = ({ colorEditor, img }: ItemNewsProps) => {
  return (
    <>
      <article className="flex flex-col">
        <div className="h-[350px]">
          <Image
            alt="img-new"
            src={`/assets/images/${img}`}
            width={587}
            height={295}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-x-5 items-center mt-5">
          <div className={`px-5 py-2 ${colorEditor}`}>
            <small>John Smash</small>
          </div>
          <div>
            <P>.5 min</P>
          </div>
        </div>
        <div>
          <Subtitle>Lorem Ipsum is simply dummy text dummy text </Subtitle>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&pos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.{' '}
          </P>
        </div>
      </article>
      <hr />
    </>
  );
};

export default ItemBigNew;
