import { CircleListCustomersProps } from 'interfaces/portfolio/portfolio.interfaces';

const CirclesListCustomers = ({
  listCustomers,
  index,
}: CircleListCustomersProps) => {
  return (
    <div className="flex gap-x-2">
      {listCustomers.map(({ id }, indexList) => (
        <div
          className={` h-[15px] rounded-full transition-[width] ${
            index == indexList ? 'bg-orange-500 w-[50px]' : 'bg-white w-[15px]'
          }`}
          key={id}
        ></div>
      ))}
    </div>
  );
};

export default CirclesListCustomers;
