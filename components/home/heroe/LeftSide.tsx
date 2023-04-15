import { TextAlignEnum } from 'interfaces/text/text.enums';
import { RoundedButtonKind } from '../../../interfaces/button/button.enum';
import Button from '../../button';
import P from '../../p';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center lg:items-start  lg:pr-24 gap-y-4">
      <small className="text-primary font-bold text-base">3D game Dev</small>
      <h2 className="text-5xl font-bold text-white leading-[1.5em] text-center lg:text-left">
        Work that we produce for our clients
      </h2>
      <P align={TextAlignEnum.center} className="lg:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard.
      </P>
      <Button fullRounded={RoundedButtonKind.full}>Get more details</Button>
    </div>
  );
};

export default LeftSide;
