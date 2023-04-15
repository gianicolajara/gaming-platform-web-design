import ItemIndustry from './ItemIndustry';
import { itemsIndustry } from './utils/listIndustry';

const ListItemsIndutry = () => {
  return (
    <ul className="flex flex-wrap gap-x-40 justify-evenly items-center gap-y-16">
      {itemsIndustry.map(({ icon, id, title }) => (
        <ItemIndustry key={id} icon={icon} id={id} title={title} />
      ))}
    </ul>
  );
};

export default ListItemsIndutry;
