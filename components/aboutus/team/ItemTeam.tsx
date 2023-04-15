import P from 'components/p';
import { ItemTeamProps } from 'interfaces/aboutus/aboutus.interfaces';
import { TextBoldEnum } from 'interfaces/text/text.enums';
import Image from 'next/image';

const ItemTeam = ({ image, job, name }: ItemTeamProps) => {
  return (
    <article className="p-10 flex flex-col bg-white/5 rounded-3xl w-full lg:w-1/4 h-max justify-center items-center">
      <div>
        <Image
          alt="avatar"
          src={`/assets/icons/${image}`}
          width={100}
          height={100}
        />
      </div>
      <P weight={TextBoldEnum.bold}>{name}</P>
      <P weight={TextBoldEnum.light}>{job}</P>
    </article>
  );
};

export default ItemTeam;
