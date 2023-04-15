import { PrimaryWrapperProps } from '../../interfaces/wrapper/wrapper.interfaces';

const PrimaryWrapper = ({ children }: PrimaryWrapperProps) => {
  return <div className="px-[1em] lg:px-[150px] w-full h-full">{children}</div>;
};

export default PrimaryWrapper;
