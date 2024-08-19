"use client";
import React, { useEffect, useState } from "react";
import {CircularProgress} from "@nextui-org/react";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("@/components/Header"),{ssr:false});
const FilterBar = dynamic(()=> import("@/components/FilterBar"),{ssr:false});
const ProductPage = dynamic(()=> import("@/components/ProductPage"),{ssr:false});
const Footer = dynamic(()=> import("@/components/Footer"),{ssr:false});

const index = () => {
	return (
		<div className="min-h-screen min-w-full flex flex-col">
			<Header />
			<FilterBar />
			<ProductPage />
		</div>
	);
};

export default index;