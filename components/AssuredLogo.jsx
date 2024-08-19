import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const AssuredLogo = ({iconSize}) => {
    return (
        <div className="flex items-center justify-center gap-1 bg-black text-white rounded-full full py-1 px-2">
            <RiShoppingCart2Line size={iconSize==='sm' ? 20 : (iconSize==='md' ? 24 : (iconSize==='lg' ? 27 : 20))} className=" rotate-[-45deg]"/>
            <span className={`${iconSize==='sm' ? 'text-tiny' : ''} ${iconSize==='md' ? 'text-sm' : ''} ${iconSize==='lg' ? 'text-base' : ''}`}>BFK Assured</span>
        </div>
    );
}
export default AssuredLogo;
