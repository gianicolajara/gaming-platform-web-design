import P from 'components/p';
import useBreadcrumb from 'hooks/useBreadcrumb';
import { TextColorEnum } from 'interfaces/text/text.enums';

const Breadcrumb = () => {
  const { actualPath, homePath } = useBreadcrumb();

  return (
    <div className="flex gap-x-1">
      <P>{homePath}</P>

      <P color={TextColorEnum.primary}>&gt; {actualPath}</P>
    </div>
  );
};

export default Breadcrumb;
