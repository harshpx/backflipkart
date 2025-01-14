import React,{useContext, useEffect} from "react";
import { StoreContext } from "@/store/StoreContext";
import dynamic from "next/dynamic";
const Product = dynamic(()=> import("@/components/Product"),{ssr:false});
import productData from '@/api/products.json';

const ProductPage = () => {
    const { products, setProducts, filteredProducts, setFilteredProducts, filters, setFilters} = useContext(StoreContext);

    useEffect(()=>{
        setProducts(productData);
        setFilteredProducts(productData);
    },[])

    useEffect(()=>{
        if(products.length>0){
            setFilteredProducts(products.filter((product) => 
                (filters?.category==="all"|| product?.category===filters?.category) && 
                (product?.price>=filters?.minPrice) && (product?.price<=filters?.maxPrice) &&
                (filters?.assured ? product?.assured : true) &&
                (product?.rating?.rate>=filters?.minRating) &&
                (filters?.searchText==="" || product?.title?.toLowerCase().includes(filters?.searchText?.toLowerCase()) || product?.description?.toLowerCase().includes(filters?.searchText?.toLowerCase()))
            ));
        }
    },[filters])

    return (
        <div className="w-full flex-grow flex flex-col gap-4 items-center bg-black">
            <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="text-zinc-400 text-lg p-8">More products coming soon!</div>
        </div>
    )
};

export default ProductPage;
