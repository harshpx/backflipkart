import React, { useEffect, useRef, useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import AssuredLogo from "./AssuredLogo";
import useHover from "@/hooks/useHover";
import useWindowWidth from "@/hooks/useWindowWidth";

const toSentenceCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Product = ({ product }) => {
    const { isMobile, isTablet } = useWindowWidth();
    const ref = useRef();
    const isHovered = useHover(ref);
    return (
        <Card ref={ref} isFooterBlurred isPressable className="w-full aspect-[5/6] text-white shadow-lg">
            <Image
                removeWrapper
                alt="Card background"
                className={`z-0 w-full h-full object-cover ${isHovered || isMobile || isTablet ? "scale-90" : "scale-110" }`}
                src={product?.image}
            />
            <CardFooter className="absolute bg-black/30 bottom-0 shadow-lg z-10">
                <div className="w-full flex flex-col items-start gap-2 transition-all duration-200">
                    <span className="text-xl text-nowrap w-5/6 truncate text-left">{product.title}</span>
                    <div className="w-full flex items-center justify-start gap-2">
                        <span className="text-sm text-white/80">{product?.category ? toSentenceCase(product?.category) : ''}</span>
                        {product?.assured ? <AssuredLogo iconSize="sm" /> : null}
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                        <Rating readOnly spaceInside="small" value={product?.rating?.rate || 4} style={{width:'26%', marginBottom:'2px'}}/>
                        <span>{product?.rating?.count || 1}</span>
                    </div>
                    <span className="text-lg">{`$${product.price}`}</span>
                    <div onClick={()=>console.log('added')} className={`cursor-pointer z-20 w-full flex items-center justify-center bg-black active:bg-[#3f3f44] text-white text-sm transition-all duration-250 rounded-full overflow-hidden ${isHovered || isMobile || isTablet ? "h-10" : "h-0"}`}>Add to Cart</div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default Product;
