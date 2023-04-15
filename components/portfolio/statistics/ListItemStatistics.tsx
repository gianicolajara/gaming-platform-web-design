import ItemStatistic from './ItemStatistic';
import { listStatistics } from './utils/listItemStatistics';

const ListItemStatistics = () => {
  return (
    <div className="flex bg-white/5 rounded-2xl py-5 h-full lg:h-[150px] flex-wrap lg:flex-nowrap justify-center items-center w-min lg:w-full p-10 lg:p-0">
      {listStatistics.map(({ content, icon, id, number }, index) => (
        <ItemStatistic
          icon={icon}
          number={number}
          content={content}
          index={index}
          key={id}
        />
      ))}
    </div>
  );
};

export default ListItemStatistics;
