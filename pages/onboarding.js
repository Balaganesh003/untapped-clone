import Authorization from '@/components/Authorization';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextPanel = () => {
    if (index < 2) {
      setIndex(index + 1);
      targetRef.current.scrollLeft += 740;
      setDirection(1);
    }
  };

  const prevPanel = () => {
    if (index > 0) {
      setIndex(index - 1);
      targetRef.current.scrollLeft -= 740;
      setDirection(-1);
    }
  };

  const handleScroll = (e) => {
    if (isMobile) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full pt-[1.5rem] pb-[1.5rem] ">
      <div
        className="w-[740px] h-[540px] bg-white py-[20px] shadow-nav overflow-hidden mx-auto"
        onScroll={handleScroll}>
        <div
          ref={targetRef}
          className="flex w-full overflow-x-auto scrollbar-hide">
          <AnimatePresence initial={false} custom={index} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-[20px]">
              {index === 0 && <Authorization />}
              {index === 1 && <Education />}
              {index === 2 && <Resume />}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-center mt-[2rem]">
          <button
            onClick={prevPanel}
            className="text-[#2D2D2D] p-4 text-[14px] font-bold">
            Back
          </button>
          <button
            onClick={nextPanel}
            className="text-[#2D2D2D] p-4 text-[14px] font-bold">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
