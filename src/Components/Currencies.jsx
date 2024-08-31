import React from 'react'
import { PiCurrencyBtcFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";

import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { PiCurrencyCnyBold } from "react-icons/pi";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { PiCurrencyEthBold } from "react-icons/pi";
import { PiCurrencyEurBold } from "react-icons/pi";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { PiCurrencyKztFill } from "react-icons/pi";
import { PiCurrencyNgnBold } from "react-icons/pi";
import { PiCurrencyNgnFill } from "react-icons/pi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { GiCreditsCurrency } from "react-icons/gi";
import { MdCurrencyYen } from "react-icons/md";
import { RiCurrencyFill } from "react-icons/ri";
import Curr from './Curr';


function Currencies() {
  return (
    <div className=' max-w-[1200px] mx-auto '>
        <Marquee autoFill={true} >
    <div className='  flex gap-4 overflow-x-scroll hide-scrollbar px-3 '>
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<PiCurrencyBtcFill />} />
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<RiCurrencyFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyCnyBold />} crr2={<MdCurrencyYen />} />
        <Curr crr1={<PiCurrencyDollarBold />} crr2={<GiCreditsCurrency  />} down="mt-10" />
        <Curr crr1={<PiCurrencyEthBold />} crr2={<MdOutlineCurrencyExchange />} />
        <Curr crr1={<PiCurrencyEurBold />} crr2={<PiCurrencyNgnFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyGbpBold />} crr2={<PiCurrencyNgnBold />} />
        <Curr crr1={<PiCurrencyKztFill />} crr2={<PiCurrencyKztFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyNgnBold />} crr2={<PiCurrencyGbpBold />} />
        <Curr crr1={<PiCurrencyNgnFill />} crr2={<PiCurrencyEurBold  />} down="mt-10" />
        <Curr crr1={<MdOutlineCurrencyExchange />} crr2={<PiCurrencyEthBold />} />
        <Curr crr1={<GiCreditsCurrency />} crr2={<PiCurrencyCnyBold  />} down="mt-10" />
        <Curr crr1={<MdCurrencyYen />} crr2={<PiCurrencyCnyBold />} />
        <Curr crr1={<RiCurrencyFill />} crr2={<PiCurrencyBtcFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyCircleDollarBold />} crr2={<PiCurrencyBtcFill />} />
        {/* <Curr crr1={<PiCurrencyBtcFill />} crr2={<PiCurrencyBtcFill />} /> */}
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<RiCurrencyFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyCnyBold />} crr2={<MdCurrencyYen />} />
        <Curr crr1={<PiCurrencyDollarBold />} crr2={<GiCreditsCurrency  />} down="mt-10" />
        <Curr crr1={<PiCurrencyEthBold />} crr2={<MdOutlineCurrencyExchange />} />
        <Curr crr1={<PiCurrencyEurBold />} crr2={<PiCurrencyNgnFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyGbpBold />} crr2={<PiCurrencyNgnBold />} />
        <Curr crr1={<PiCurrencyKztFill />} crr2={<PiCurrencyKztFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyNgnBold />} crr2={<PiCurrencyGbpBold />} />
        <Curr crr1={<PiCurrencyNgnFill />} crr2={<PiCurrencyEurBold  />} down="mt-10" />
        <Curr crr1={<MdOutlineCurrencyExchange />} crr2={<PiCurrencyEthBold />} />
        <Curr crr1={<GiCreditsCurrency />} crr2={<PiCurrencyCnyBold  />} down="mt-10" />
        <Curr crr1={<MdCurrencyYen />} crr2={<PiCurrencyCnyBold />} />
        <Curr crr1={<RiCurrencyFill />} crr2={<PiCurrencyBtcFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<PiCurrencyBtcFill />} />
        {/* <Curr crr1={<PiCurrencyBtcFill />} crr2={<PiCurrencyBtcFill />} /> */}
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<RiCurrencyFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyCnyBold />} crr2={<MdCurrencyYen />} />
        <Curr crr1={<PiCurrencyDollarBold />} crr2={<GiCreditsCurrency  />} down="mt-10" />
        <Curr crr1={<PiCurrencyEthBold />} crr2={<MdOutlineCurrencyExchange />} />
        <Curr crr1={<PiCurrencyEurBold />} crr2={<PiCurrencyNgnFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyGbpBold />} crr2={<PiCurrencyNgnBold />} />
        <Curr crr1={<PiCurrencyKztFill />} crr2={<PiCurrencyKztFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyNgnBold />} crr2={<PiCurrencyGbpBold />} />
        <Curr crr1={<PiCurrencyNgnFill />} crr2={<PiCurrencyEurBold  />} down="mt-10" />
        <Curr crr1={<MdOutlineCurrencyExchange />} crr2={<PiCurrencyEthBold />} />
        <Curr crr1={<GiCreditsCurrency />} crr2={<PiCurrencyCnyBold  />} down="mt-10" />
        <Curr crr1={<MdCurrencyYen />} crr2={<PiCurrencyCnyBold />} />
        <Curr crr1={<RiCurrencyFill />} crr2={<PiCurrencyBtcFill  />} down="mt-10" />
        <Curr crr1={<PiCurrencyBtcFill />} crr2={<PiCurrencyBtcFill />} />
        
        
    </div>
    </Marquee>
    </div>
  )
}

export default Currencies