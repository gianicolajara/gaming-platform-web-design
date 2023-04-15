import { ItemNavbarProps } from '../../interfaces/navbar/navbar.interface';
import ItemNavbar from './ItemNavbar';

interface ListItemNavBarProps {
  listMenu: Array<ItemNavbarProps>;
  handleClose: () => void;
}

const ListItemNavbar = ({ listMenu, handleClose }: ListItemNavBarProps) => {
  return (
    <ul className="flex gap-x-0 lg:gap-x-20 flex-col lg:flex-row">
      {listMenu.map(({ id, title, url }) => (
        <ItemNavbar
          id={id}
          title={title}
          key={id}
          url={url}
          handleClose={handleClose}
        />
      ))}
    </ul>
  );
};

export default ListItemNavbar;
