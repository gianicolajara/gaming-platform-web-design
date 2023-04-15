import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import Image from 'next/image';

const Industry = () => {
  return (
    <section className="py-20">
      <div className="bg-white/5 pt-0 lg:pt-24">
        <PrimaryWrapper>
          <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 py-10 lg:py-0 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20">
            <div className="w-full h-full relative">
              <Image
                alt="akali"
                src="/assets/images/akali.png"
                width={496}
                height={490}
                className="block object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-5">
              <P>Lorem ipsum</P>
              <Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </Subtitle>
              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries,
              </P>
            </div>
          </div>
        </PrimaryWrapper>
      </div>
    </section>
  );
};

export default Industry;
