import { TextAlignEnum, TextBoldEnum } from '../../interfaces/text/text.enums';
import P from '../p';
import Subtitle from '../titles/subtitle';
import PrimaryWrapper from '../wrapper/PrimaryWrapper';
import ListItemSocialLink from './ListItemSocialLink';

const Footer = () => {
  const dt = new Date();

  return (
    <footer className="bg-jh">
      <PrimaryWrapper>
        <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-4 lg:grid-rows-1 gap-x-10 gap-y-10 lg:gap-y-0 py-20">
          <div className="flex flex-col gap-y-2">
            <Subtitle>LOGO</Subtitle>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </P>
            <P>@Logo</P>
          </div>
          <div className="flex flex-col gap-y-5 items-start lg:justify-center lg:items-center">
            <P weight={TextBoldEnum.bold}>About us</P>
            <ul>
              <li>
                <P>Zeux</P>
              </li>
              <li>
                <P>Portfolio</P>
              </li>
              <li>
                <P>Careers</P>
              </li>
              <li>
                <P>Contact us</P>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-5">
            <P weight={TextBoldEnum.bold}>Contact us</P>
            <ul>
              <li>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, repudiandae excepturi reprehenderit.
                </P>
              </li>
              <li className="mt-3">
                <P>+908 89097 890</P>
              </li>
            </ul>
          </div>
          <div className="w-full h-full">
            <ListItemSocialLink />
          </div>
        </div>
      </PrimaryWrapper>
      <div className="w-full">
        <hr />
        <div className="py-10">
          <P align={TextAlignEnum.center} weight={TextBoldEnum.light}>
            Copyright &copy; {dt.getFullYear()}
          </P>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
