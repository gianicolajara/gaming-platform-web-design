import ItemBigNew from './ItemBigNew';
import { listBigNews } from './utils/listNews';

const ListItemBigNew = () => {
  return (
    <div className="flex flex-col justify-start xl:justify-between gap-y-10 xl:gap-y-0 mb-10 xl:mb-0">
      {listBigNews.map(({ colorEditor, img, id }) => (
        <ItemBigNew colorEditor={colorEditor} img={img} key={id} />
      ))}
    </div>
  );
};

export default ListItemBigNew;
