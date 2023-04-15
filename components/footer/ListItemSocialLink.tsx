import ItemSocialLink from './ItemSocialLink';
import { listSocialLink } from './utils/listSocial';

const ListItemSocialLink = () => {
  return (
    <ul className="w-full h-full flex justify-center items-center lg:justify-start lg:items-end">
      {listSocialLink.map(({ id, img, url }) => (
        <ItemSocialLink key={id} id={id} img={img} url={url} />
      ))}
    </ul>
  );
};

export default ListItemSocialLink;
