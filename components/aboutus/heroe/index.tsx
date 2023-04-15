import LeftSide from './LeftSide';
import RightSide from './RightSide';

const HeroeAboutus = () => {
  return (
    <section className="lg:h-[calc(100vh-75px)] py-10 lg:py-0">
      <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 w-full h-full gap-y-10 lg:gap-y-0">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default HeroeAboutus;
