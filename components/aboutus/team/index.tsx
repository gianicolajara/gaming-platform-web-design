import Subtitle from 'components/titles/subtitle';
import PrimaryWrapper from 'components/wrapper/PrimaryWrapper';
import ListItemTeam from './ListItemTeam';

const Team = () => {
  return (
    <section className="py-20">
      <PrimaryWrapper>
        <Subtitle>Our Team</Subtitle>
        <div className="mt-10">
          <ListItemTeam />
        </div>
      </PrimaryWrapper>
    </section>
  );
};

export default Team;
