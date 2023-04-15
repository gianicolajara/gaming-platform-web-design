import P from 'components/p';
import { ItemCustomerProps } from 'interfaces/portfolio/portfolio.interfaces';
import Image from 'next/image';
import { forwardRef } from 'react';
import { AiFillStar } from 'react-icons/ai';

const ItemCustomer = forwardRef<HTMLDivElement, ItemCustomerProps>(
  ({ avatar, city, content, name, selected }, ref) => {
    return (
      <article
        className={`flex flex-col w-full lg:w-[calc(33%-10px)] h-full border-4 ${
          selected ? 'border-orange-500' : 'border-white'
        } rounded-lg bg-black/50 p-5 flex-shrink-0 `}
        ref={ref}
      >
        <div className="flex justify-between">
          <div className="flex gap-x-5">
            <div className="w-[50px] h-[50px]">
              <Image
                alt="avatar"
                src={`/assets/images/${avatar}`}
                width={50}
                height={50}
              />
            </div>
            <div>
              <P>{name}</P>
              <small className="text-darkGray">{city}</small>
            </div>
          </div>
          <div className="flex gap-x-1 items-center">
            <P>4.5</P>
            <AiFillStar color="gold" />
          </div>
        </div>
        <div>
          <P>{content}</P>
        </div>
      </article>
    );
  }
);

ItemCustomer.displayName = 'ItemCustomer';

export default ItemCustomer;
