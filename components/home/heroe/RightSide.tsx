import Image from 'next/image';

const RightSide = () => {
  return (
    <div className="relative w-full h-full hidden lg:flex">
      <div className="absolute left-[-25%] top-[45%]">
        <Image
          alt="unity-logo"
          src="/assets/logos/unity-logo.png"
          quality={100}
          width={96}
          height={30}
        />
      </div>
      <div className="absolute left-[15%] top-[23%]">
        <Image
          alt="unity-logo"
          src="/assets/logos/cry-logo.png"
          quality={100}
          width={101}
          height={99}
        ></Image>
      </div>
      <div className="absolute left-[85%] top-[27%]">
        <Image
          alt="unity-logo"
          src="/assets/logos/unreal-logo.png"
          quality={100}
          width={59}
          height={64}
        ></Image>
      </div>
      <div className="relative w-[100%] h-[100%]">
        <Image
          alt="heroe"
          src="/assets/images/heroe.png"
          quality={100}
          width={441}
          height={761}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default RightSide;
