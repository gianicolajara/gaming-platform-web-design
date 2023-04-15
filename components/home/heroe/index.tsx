import PrimaryWrapper from '../../wrapper/PrimaryWrapper';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Heroe = () => {
  return (
    <section className="w-[100vw] h-auto">
      <PrimaryWrapper>
        <div className="w-full h-[100vh] 2xl:h-auto grid grid-cols-1 grid-rows-1 lg:grid-cols-[55%,_45%] lg:grid-rows-1 gap-x-10">
          <LeftSide />
          <RightSide />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Heroe;
