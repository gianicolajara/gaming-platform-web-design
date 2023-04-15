import P from 'components/p';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const initialIndex = 0;

const listImages = ['heroe-aboutus.png', 'background-explanation.png'];

const RightSide = () => {
  const [index, setIndex] = useState(initialIndex);

  const handleRight = () => {
    if (index >= listImages.length - 1) return;
    setIndex(index + 1);
  };

  const handleLeft = () => {
    if (index <= 0) return;
    setIndex(index - 1);
  };

  return (
    <div className="relative h-[375px] lg:h-full">
      <Image
        alt="aboutus-background"
        src={`/assets/images/${listImages[index]}`}
        width={739}
        height={656}
        className="object-cover w-full h-full "
      />
      <div className="bg-darkGray h-[60px] absolute bottom-0 left-0 z-50 flex justify-between items-center ">
        <div className="p-5 cursor-pointer select-none" onClick={handleLeft}>
          <AiOutlineArrowLeft color="white" />
        </div>
        <P>
          {index + 1} of {listImages.length}
        </P>
        <div className="p-5 cursor-pointer select-none" onClick={handleRight}>
          <AiOutlineArrowRight color="white" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
