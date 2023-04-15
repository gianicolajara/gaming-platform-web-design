import IconButton from 'components/iconButton';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ListItemNavbar from './ListItemNavbar';
import { listMenu } from './utils/arrayMenuItems';

const initialOpen = false;
const initialScroll = 0;

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(initialOpen);
  const [scroll, setScroll] = useState<number>(initialScroll);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleOpen = () => setOpen(!open);

  const handleChangeBgMenuByScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBgMenuByScroll);

    return () =>
      window.removeEventListener('scroll', handleChangeBgMenuByScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[75px] flex justify-between items-center px-[1em] lg:px-[82px] fixed top-0 z-[999] ${
        scroll >= 50 ? 'bg-background/90' : 'bg-transparent'
      } transition-all`}
    >
      <div>
        <h1 className="text-3xl font-bold text-white">LOGO</h1>
      </div>
      <div className="flex lg:hidden">
        <IconButton Icon={AiOutlineMenu} onClick={handleOpen} />
      </div>
      <div
        className={`flex items-center gap-x-10 w-[100vw] h-[100vh] bg-background absolute lg:static top-0 flex-col justify-center gap-y-10 lg:left-0 lg:bg-transparent lg:flex-row lg:h-auto lg:w-auto ${
          open ? 'left-[0%]' : 'left-[100%]'
        } transition-[left] ease-in-out duration-300 delay-200`}
      >
        <div className="absolute top-[1em] right-[1em] lg:hidden flex">
          <IconButton Icon={AiOutlineClose} onClick={handleOpen} />
        </div>
        <ListItemNavbar listMenu={listMenu} handleClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
