import Breadcrumb from 'components/breadcrumb';
import Button from 'components/button';
import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import { RoundedButtonKind } from 'interfaces/button/button.enum';
import { AiOutlineArrowRight } from 'react-icons/ai';

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-y-1 lg:gap-y-10 items-start lg:justify-center lg:pl-20 lg:pr-52 px-[1em] lg:px-0">
      <Breadcrumb />
      <Subtitle>Lorem Ipsum is simply dummy text of the printing and.</Subtitle>
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
      </P>
      <Button Icon={AiOutlineArrowRight} fullRounded={RoundedButtonKind.full}>
        Get in touch
      </Button>
    </div>
  );
};

export default LeftSide;
