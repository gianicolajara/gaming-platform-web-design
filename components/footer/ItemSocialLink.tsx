import Image from 'next/image';
import Link from 'next/link';
import { SocialLinkProps } from '../../interfaces/footer/footer.interfaces';

const ItemSocialLink = ({ url, img }: SocialLinkProps) => {
  return (
    <Link href={url}>
      <li className="w-full h-full relative">
        <Image
          alt="social-network"
          src={`/assets/icons/${img}`}
          width={50}
          height={50}
        />
      </li>
    </Link>
  );
};

export default ItemSocialLink;
