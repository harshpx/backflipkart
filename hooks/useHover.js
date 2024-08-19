import React, { useEffect, useState } from 'react'

const useHover = (ref) => {
    const [hovered, setHovered] = useState(false);
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(()=>{
        const reference = ref.current;
        reference.addEventListener('mouseenter', enter);
        reference.addEventListener('mouseleave', leave);
        return () => {
            reference.removeEventListener('mouseenter', enter);
            reference.removeEventListener('mouseleave', leave);
        }
    }, [])

    return hovered;
}

export default useHover;