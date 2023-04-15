import Link from 'next/link';
import { ItemNavbarProps } from '../../interfaces/navbar/navbar.interface';

const ItemNavbar = ({ id, title, url, handleClose }: ItemNavbarProps) => {
  return (
    <Link href={url} onClick={handleClose}>
      <li
        key={id}
        className="text-white cursor-pointer text-center relative after:content-[''] after:absolute after:w-[100%] after:scale-x-0  after:h-[2px] after:bg-primary after:left-0 after:bottom-0 after:origin-bottom-right after:transition-[transform] after:ease-out after:duration-[250ms] hover:after:origin-bottom-left hover:after:scale-x-100 py-5 lg:py-0"
      >
        {title}
      </li>
    </Link>
  );
};

export default ItemNavbar;
