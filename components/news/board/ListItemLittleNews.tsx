import ItemLittleNew from './ItemLittleNew';
import { listLittleNews } from './utils/listNews';

const ListItemLittleNews = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {listLittleNews.map(({ colorEditor, img, id }) => (
        <ItemLittleNew key={id} colorEditor={colorEditor} img={img} />
      ))}
    </div>
  );
};

export default ListItemLittleNews;
