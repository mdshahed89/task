import React from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';

const StatsSection = () => {
  return (
    <div className="flex items-center justify-center">
      <ArcherContainer strokeColor="black" strokeWidth={2}>
        <div className="relative flex items-center justify-between gap-6 w-full md:w-[700px] lg:w-[1000px] min-h-[20rem] ">
          
         
          <ArcherElement id="box1" relations={[{
              targetId: 'box2',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: '#AF47D2', strokeWidth: 1, endMarker: false,  },
            }]}>
            <div className="text-center">
              <div className=" rounded-lg p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800  ">
                <div className=" w-[6rem] px-3 sm:w-[8rem] md:w-[10rem] lg:w-[15rem] py-2 lg:py-4 rounded-lg bg-[#2a1249] ">
                  <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    55M+
                  </h2>
                  <p className="text-transparent text-xs md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Transaction in Altcoins</p>
                </div>
              </div>
            </div>
          </ArcherElement>
          
          
          <ArcherElement id="box2" relations={[{
              targetId: 'box3',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: { strokeColor: '#AF47D2', strokeWidth: 1, endMarker: false },
            }]}>
            <div className="text-center relative -top-8 md:-top-16 lg:-top-24">
              <div className="rounded-lg p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800 ">
                <div className=" w-[6rem] px-3 sm:w-[8rem] md:w-[10rem] lg:w-[15rem] py-2 lg:py-4 rounded-lg bg-[#2a1249]">
                  <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    250M+
                  </h2>
                  <p className="text-transparent text-xs md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Transaction in Bitcoin</p>
                </div>
              </div>
            </div>
          </ArcherElement>
          
         
          <ArcherElement id="box3">
            <div className="text-center">
              <div className="rounded-lg p-px bg-gradient-to-r from-[#FEAE6F] to-purple-800 ">
                <div className=" w-[6rem] px-3 sm:w-[8rem] md:w-[10rem] lg:w-[15rem] py-2 lg:py-4 rounded-lg bg-[#2a1249]">
                  <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                    23+
                  </h2>
                  <p className="text-transparent text-xs md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-purple-500 to-white font-bold mt-2">Total Project</p>
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
