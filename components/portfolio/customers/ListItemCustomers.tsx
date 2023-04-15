import useMediaQuery from 'hooks/useMediaQuery';
import { CustomerProps } from 'interfaces/portfolio/portfolio.interfaces';
import { useEffect, useRef, useState } from 'react';
import ArrowsListCustomers from './ArrowsListCustomers';
import CirclesListCustomers from './CirclesListCustomers';
import ItemCustomer from './ItemCustomer';

const initialIndex = 0;
const initialCenterIndex = 0;
const initialCalc = 0;

const ListItemCustomers = ({ listCustomers }: CustomerProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [centerIndex, setCenterIndex] = useState(initialCenterIndex);
  const [calc, setcalc] = useState(initialCalc);
  const cardRef = useRef<HTMLDivElement>(null);
  const { isLg } = useMediaQuery();

  const handleLeft = () => {
    if (index <= 0) return;
    setIndex(index - 1);
    if (index - 1 < 1 && isLg) return;
    setCenterIndex(centerIndex - 1);
  };

  const handleRight = () => {
    if (index >= listCustomers.length - 1) return;
    setIndex(index + 1);
    if (index + 1 <= 1 && isLg) return;
    setCenterIndex(centerIndex + 1);
  };

  useEffect(() => {
    setcalc(
      -centerIndex * (cardRef.current?.offsetWidth ?? 0) - centerIndex * 20
    );
  }, [centerIndex, index]);

  useEffect(() => {
    setIndex(initialIndex);
    setCenterIndex(initialCenterIndex);
  }, [isLg]);

  return (
    <>
      <div className="w-full h-full lg:overflow-x-visible overflow-x-hidden">
        <div
          className={`flex flex-nowrap w-full h-full mt-20 gap-x-5 transition-transform duration-300 ease-in items-center`}
          style={{
            transform: `translateX(${calc}px)`,
          }}
        >
          {listCustomers.map(
            ({ avatar, city, content, name, id }, indexList) => (
              <ItemCustomer
                avatar={avatar}
                city={city}
                content={content}
                name={name}
                key={id}
                selected={indexList === index}
                ref={cardRef}
              />
            )
          )}
        </div>
      </div>
      <div className="flex w-full h-[50px] justify-between items-center mt-10">
        <CirclesListCustomers index={index} listCustomers={listCustomers} />
        <ArrowsListCustomers
          handleLeft={handleLeft}
          handleRight={handleRight}
        />
      </div>
    </>
  );
};

export default ListItemCustomers;
