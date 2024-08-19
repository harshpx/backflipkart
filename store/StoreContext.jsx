import { createContext, useState } from "react";

export const StoreContext = createContext({
	products: [],
	setProducts: () => {},
	filteredProducts: [],
	setFilteredProducts: () => {},
	categories: [],
	setCategories: () => {},
	currentCategory: "",
	setCurrentCategory: () => {},
	cart: [],
	setCart: () => {},
	toSentenceCase: () => {},
	filters: [],
	setFilters: () => {},
});

const defaultFilters = {
	searchText:"",
	category:"all",
	minPrice:0,
	maxPrice:1000,
	assured:false,
	minRating:0,
};

const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filters, setFilters] = useState(defaultFilters);
	const [categories, setCategories] = useState([]);
	const [cart, setCart] = useState([]);

	const toSentenceCase = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<StoreContext.Provider value={{ 
			products, setProducts,
			filteredProducts, setFilteredProducts,
			categories, setCategories,
			filters, setFilters,
			cart, setCart,
			toSentenceCase
		}}>
			{children}
		</StoreContext.Provider>
	);
}

export default ContextProvider;