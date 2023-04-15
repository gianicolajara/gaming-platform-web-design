import ItemTeam from './ItemTeam';
import { listItemTeam } from './utils/listItemTeam';

const ListItemTeam = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap gap-x-10 gap-y-5 lg:gap-y-0">
      {listItemTeam.map(({ id, image, job, name }) => (
        <ItemTeam image={image} job={job} name={name} key={id} />
      ))}
    </div>
  );
};

export default ListItemTeam;
