import ReadMore from '../readMore';
import { listReadMore } from './utils/listItemReadMore';

const Information = () => {
  return (
    <section>
      {listReadMore.map(({ img, id, left }) => (
        <ReadMore img={img} key={id} left={left} />
      ))}
    </section>
  );
};

export default Information;
