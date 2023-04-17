import Button from 'components/button';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { BoldButtonKind, ColorButtonKind } from 'interfaces/button/button.enum';
import { TextSizeEnum } from 'interfaces/text/text.enums';
import TradingGameList from './TradingGameList';

const Trending = () => {
  return (
    <section className="w-full h-full pb-10 lg:py-20">
      <PrimaryWrapper>
        <div className="w-full flex justify-between items-center">
          <Subtitle size={TextSizeEnum.sm} className="lg:text-2xl">
            Currently Trending Games
          </Subtitle>
          <Button
            color={ColorButtonKind.whiteTransparent}
            weigth={BoldButtonKind.bold}
          >
            SEE ALL
          </Button>
        </div>
        <div className="mt-[3em]">
          <TradingGameList />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Trending;
