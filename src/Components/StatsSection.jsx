import React, { useEffect, useState } from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';

const StatsSection = () => {


  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMediumScreen);
  
  
  return (
    <div className="flex items-center justify-center mb-20 md:mb-0">
      <ArcherContainer strokeColor="black" strokeWidth={2}>
        <div className="relative flex items-center md:flex-row flex-col justify-between gap-6 w-full md:w-[700px] lg:w-[1000px] min-h-[20rem] ">
          
         
          <ArcherElement className=""  id="box1" relations={ isMediumScreen ? [] : [{
              targetId: 'box2',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: '#AF47D2', strokeWidth: 1, endMarker: false,  },
            }]}>
            <div className="text-center">
              <div className=" rounded-lg p-[3px] md:p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800  ">
                <div className=" w-[20rem] px-3  md:w-[10rem] lg:w-[15rem] py-6 md:py-4 rounded-lg bg-[#2a1249] ">
                  <h2 className=" text-3xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    55M+
                  </h2>
                  <p className="text-transparent text-base md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Transaction in Altcoins</p>
                </div>
              </div>
            </div>
          </ArcherElement>
          
          
          <ArcherElement id="box2" relations={ isMediumScreen ? [] : [{
              targetId: 'box3',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: '#AF47D2', strokeWidth: 1, endMarker: false },
            }]}>
            <div className="text-center relative top-0 md:-top-16 lg:-top-24">
              <div className="rounded-lg p-[3px] md:p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800 ">
                <div className=" w-[20rem] px-3  md:w-[10rem] lg:w-[15rem] py-6 md:py-4 rounded-lg bg-[#2a1249]">
                  <h2 className=" text-3xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    250M+
                  </h2>
                  <p className="text-transparent text-base md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Transaction in Bitcoin</p>
                </div>
              </div>
            </div>
          </ArcherElement>
          
         
          <ArcherElement id="box3">
            <div className="text-center">
              <div className="rounded-lg p-[3px] md:p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800 ">
                <div className=" w-[20rem] px-3  md:w-[10rem] lg:w-[15rem] py-6 md:py-4 rounded-lg bg-[#2a1249]">
                  <h2 className=" text-3xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    23+
                  </h2>
                  <p className="text-transparent text-base md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Total Project</p>
                </div>
              </div>
            </div>
          </ArcherElement>
          
        </div>
      </ArcherContainer>
    </div>
  );
};

export default StatsSection;
