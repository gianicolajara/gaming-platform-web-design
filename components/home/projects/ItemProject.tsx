import Tilt from 'components/tilt';
import Image from 'next/image';
import { ListProjectProps } from './utils/listProjects';

const ItemProject = ({ img, width }: ListProjectProps) => {
  return (
    <Tilt options={{ max: 5 }}>
      <li>
        <Image
          alt="project-img"
          src={`/assets/images/${img}`}
          width={width}
          height={223}
        />
      </li>
    </Tilt>
  );
};

export default ItemProject;
