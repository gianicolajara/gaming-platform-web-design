import TradingGameItem from './TradingGameItem';
import { trendingGames } from './utils/arrayTrendingGames';

const TradingGameList = () => {
  return (
    <ul className="flex lg:justify-evenly flex-wrap justify-center gap-10">
      {trendingGames.map(({ id, followers, img }) => (
        <TradingGameItem id={id} followers={followers} img={img} key={id} />
      ))}
    </ul>
  );
};

export default TradingGameList;
