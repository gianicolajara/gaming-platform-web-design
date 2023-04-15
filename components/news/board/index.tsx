import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import ListItemBigNew from './ListItemBigNew';
import ListItemLittleNews from './ListItemLittleNews';

const Board = () => {
  return (
    <section>
      <PrimaryWrapper>
        <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-2 lg:grid-rows-1 mt-24 gap-x-14">
          <ListItemBigNew />
          <ListItemLittleNews />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Board;
