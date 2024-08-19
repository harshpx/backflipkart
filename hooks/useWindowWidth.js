import React, { useEffect, useState } from 'react';

const useWindowWidth = () => {
    const [width, setWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 0);

    const widthHandler = () => setWidth(window.innerWidth);

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            widthHandler();
            window.addEventListener('resize', widthHandler);
            return () => window.removeEventListener('resize', widthHandler);
        }
    }, [])

    return {
        width,
        widthHandler,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
    }
}

export default useWindowWidth;