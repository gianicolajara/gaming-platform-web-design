import P from 'components/p';
import { AiFillCheckCircle } from 'react-icons/ai';

const ListItemChecked = () => {
  return (
    <div className="flex flex-col gap-y-2 lg:items-start items-center">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex items-center">
            <div>
              <AiFillCheckCircle size={20} className="text-green-400" />
            </div>
            <div>
              <P>Lorem Ipsum is simply</P>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListItemChecked;
