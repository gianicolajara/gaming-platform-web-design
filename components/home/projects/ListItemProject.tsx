import ItemProject from './ItemProject';
import { listProject } from './utils/listProjects';

const ListItemProject = () => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center">
      {listProject.map(({ id, img, width }) => (
        <ItemProject key={id} id={id} img={img} width={width} />
      ))}
    </ul>
  );
};

export default ListItemProject;
