import P from 'components/p';
import Tilt from 'components/tilt';
import { TrendingGameItem } from 'interfaces/trendingGames/trendingGames.interfaces';
import Image from 'next/image';
import { useRef } from 'react';

const TradingGameItem = ({ img, followers }: TrendingGameItem) => {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <Tilt>
      <li className="w-[250px] ">
        <div className="w-[250px] h-[270px] transform" ref={imageRef}>
          <Image
            alt="trending-game"
            src={`/assets/images/${img}`}
            width={251}
            height={277}
          />
        </div>
        <div className="flex justify-center items-center gap-x-2 mt-6">
          <div className="w-[25px] h-[25px]">
            <Image
              alt="fire-icon"
              src={`/assets/icons/fire.png`}
              width={25}
              height={25}
            />
          </div>
          <div>
            <P>{`${followers} Followers`}</P>
          </div>
        </div>
      </li>
    </Tilt>
  );
};

export default TradingGameItem;
