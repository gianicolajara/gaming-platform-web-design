import ItemWorkWithUs from './ItemWorkWithUs';
import { listWorkWithUs } from './utils/listWorkUs';

const ListItemWorkWithUs = () => {
  return (
    <>
      {listWorkWithUs.map(({ content, tag, title, id, colorTag }) => (
        <ItemWorkWithUs
          content={content}
          tag={tag}
          title={title}
          key={id}
          colorTag={colorTag}
        />
      ))}
    </>
  );
};

export default ListItemWorkWithUs;
