import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltProps {
  children: React.ReactNode;
  options?: {};
}

const Tilt = ({ children, options = {} }: TiltProps) => {
  const tiltref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltref.current) {
      VanillaTilt.init(tiltref.current as unknown as HTMLElement, options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={tiltref}>{children}</div>;
};

export default Tilt;
