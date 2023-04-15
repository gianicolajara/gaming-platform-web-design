import Button from 'components/button';
import P from 'components/p';
import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import { BoldButtonKind, ColorButtonKind } from 'interfaces/button/button.enum';
import { TextAlignEnum } from 'interfaces/text/text.enums';
import ListItemProject from './ListItemProject';

const Projects = () => {
  return (
    <section className="pt-20">
      <PrimaryWrapper>
        <div className="px-[1em] flex flex-col items-center">
          <Subtitle align={TextAlignEnum.center}>Our Recent Projects</Subtitle>
          <P align={TextAlignEnum.center}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </P>
        </div>
        <div className="mt-16">
          <ListItemProject />
        </div>
        <div className="mt-16 w-full flex justify-center">
          <Button
            color={ColorButtonKind.whiteTransparent}
            weigth={BoldButtonKind.bold}
          >
            SEE ALL
          </Button>
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Projects;
