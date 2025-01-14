import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "@/store/StoreContext";
import categoryData from '@/api/categories.json';
import {Tabs, Tab, Slider, Checkbox, Select, SelectItem} from "@nextui-org/react";
import AssuredLogo from "./AssuredLogo";

const ratings = [
    {key:0, label:">=0"},
    {key:1, label:">=1"},
    {key:2, label:">=2"},
    {key:3, label:">=3"},
    {key:4, label:">=4"}
]

const CategoryBar = () => {
    const { categories,setCategories, filters, setFilters, toSentenceCase } = useContext(StoreContext);
    const [priceRange, setPriceRange] = useState([filters?.minPrice, filters?.maxPrice]);
    const [rating, setRating] = useState(filters?.minRating);

    useEffect(()=>{
        if(categories.length === 0) setCategories(categoryData);
    },[])

    useEffect(()=>{
        let throttleTimeout = null;

        const throttledFunction = ()=>{
            if(!throttleTimeout){
                throttleTimeout = setTimeout(()=>{
                    throttleTimeout = null;
                    setFilters({...filters, minPrice:priceRange[0], maxPrice:priceRange[1]});
                },500);
            }
        }

        throttledFunction();

        return ()=>{
            if(throttleTimeout) clearTimeout(throttleTimeout);
        }
    },[priceRange])

    useEffect(()=>{
        setFilters({...filters, minRating:rating});
    },[rating])

    const handleCategory = (category) => {
        setFilters({...filters, category});
    }

    const handleAssured = (val) => {
        setFilters({...filters, assured:val});
    }

    return (
        categories?.length>0 ? <div className="dark w-full overflow-clip bg-black flex flex-col items-center gap-1 ">
            <div className="p-1 overflow-scroll w-full scrollbar-hide">
                <Tabs
                    classNames={{
                        tabList: `bg-black`,
                    }}
                    radius="lg" 
                    fullWidth 
                    selectedKey={filters?.category}
                    onSelectionChange={(key)=>handleCategory(key)}
                >
                    {categories?.map((category) => (
                        <Tab key={category} title={toSentenceCase(category)}/>
                    ))}
                </Tabs>
            </div>
            <div className="w-full flex flex-wrap gap-x-6 gap-y-3 items-center justify-evenly text-white text-nowrap px-4 py-2">
                <Slider
                    className="w-full md:w-1/2"
                    color="foreground"
                    label="Price Range"
                    formatOptions={{style: "currency", currency: "USD"}}
                    size="sm"
                    step={10}
                    minValue={0}
                    maxValue={1000}
                    value={priceRange}
                    onChange={setPriceRange}
                />
                <Checkbox 
                    size="md"
                    color="default"
                    classNames={{
                        base: "flex items-center justify-center gap-0",
                    }}
                    value={filters?.assured}
                    onValueChange={(val)=>handleAssured(val)}
                >
                    <AssuredLogo iconSize="lg"/>
                </Checkbox>
                <Select
                    className="w-32"
                    variant="flat"
                    size="sm"
                    color="default"
                    label="Rating"
                    labelPlacement="inside"
                    selectedKeys={[rating]}
                    onChange={(e)=>setRating(e.target.value)}
                >
                    {ratings.map((rating) => (
                        <SelectItem key={rating.key} value={rating.key}>{rating.label}</SelectItem>
                    ))}
                </Select>
            </div>
        </div> : null
    )
};

export default CategoryBar;