import { ArrowsListCustomersProps } from 'interfaces/portfolio/portfolio.interfaces';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ArrowsListCustomers = ({
  handleLeft,
  handleRight,
}: ArrowsListCustomersProps) => {
  return (
    <div className="flex gap-x-5">
      <div
        className="w-[50px] h-[50px] border-4 border-orange-500 rounded-full flex justify-center items-center cursor-pointer active:bg-orange-500 group select-none"
        onClick={handleLeft}
      >
        <AiOutlineArrowLeft
          size={20}
          className="text-orange-500 group-active:text-white"
        />
      </div>
      <div
        className="cursor-pointer w-[50px] h-[50px] border-4 border-orange-500 rounded-full flex justify-center items-center active:bg-orange-500 group select-none"
        onClick={handleRight}
      >
        <AiOutlineArrowRight
          size={20}
          className="text-orange-500 group-active:text-white"
        />
      </div>
    </div>
  );
};

export default ArrowsListCustomers;
