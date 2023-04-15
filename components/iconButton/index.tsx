import { IconType } from 'react-icons';

interface IconButtonProps {
  Icon: IconType;
  onClick?: () => void;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <button className="bg-transparent p-2" onClick={onClick}>
      <Icon size={25} color="white" />
    </button>
  );
};

export default IconButton;
