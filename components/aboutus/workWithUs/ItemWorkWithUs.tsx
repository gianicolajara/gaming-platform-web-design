import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import { ItemWorkWithUsProps } from 'interfaces/aboutus/aboutus.interfaces';

const ItemWorkWithUs = ({
  content,
  tag,
  title,
  colorTag,
}: ItemWorkWithUsProps) => {
  return (
    <article className="lg:w-1/3 bg-white/10 p-10 rounded-2xl flex flex-col justify-between">
      <div
        className={`${colorTag} px-5 py-1 flex flex-col justify-center items-center rounded-lg w-max`}
      >
        <P>{tag}</P>
      </div>
      <Subtitle>{title}</Subtitle>
      <P>{content}</P>
    </article>
  );
};

export default ItemWorkWithUs;
