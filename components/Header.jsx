import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "@/store/StoreContext";
import { RiShoppingCart2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@nextui-org/react";
import useWindowWidth from "@/hooks/useWindowWidth";

const Header = () => {
	const { isMobile } = useWindowWidth();
	const {filters, setFilters} = useContext(StoreContext);
	const [searchText, setSearchText] = useState(filters.searchText);
	const router = useRouter();

	const param = router.asPath;

	// useEffect(()=>{
	// 	console.log(param);
	// },[param]);

	useEffect(()=>{
		setFilters({...filters, searchText});
	},[searchText])

    return (
        <div className="w-full h-14 bg-black text-white flex items-center justify-between px-4 gap-5">
			<div onClick={()=>router.push('/')} className="flex items-end gap-2 hover:text-black hover:bg-white px-2 py-1 rounded-full cursor-pointer">
				<RiShoppingCart2Line size={30} className=" rotate-[-45deg]"/>
				<h1 className="text-xl">{`${isMobile ? "BFK" : "Backflipkart"}`}</h1>
			</div>
			{param==="/" && <div className="flex items-center justify-center w-full sm:w-2/3 md:w-1/2 h-10 dark">
				<Input
                    isClearable
					placeholder="Search"
                    variant=""
					value={searchText}
					onValueChange={setSearchText}
					startContent={<IoSearchOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
				/>
			</div>}
			{param==="/cart" && <div className="text-xl absolute left-1/2 transform -translate-x-1/2">My Cart</div>}
			<div>
				{param==="/" && <button onClick={()=>router.push('/cart')} className="p-2 gap-1 rounded-full flex items-center justify-center hover:bg-white hover:text-black">
					<LuShoppingCart size={30} />
					<div className="px-3 rounded-full bg-white text-black">2</div>
				</button>}
				{param==="/cart" && <button onClick={()=>router.push('/')} className="p-2 gap-1 rounded-full flex items-center justify-center hover:bg-white hover:text-black">
					<BiHomeAlt2 size={30} />
				</button>}
			</div>
        </div>
    );
};

export default Header;
