import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping cart * Increment quantity
    const [count, setCount] = useState(0);

    // Product detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu * Open/Close
    const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

    // Product Detail * Show product
    const [productToShow, setProductToShow] = useState({});


    // Shopping Cart * Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart * Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState([])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('')

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState('')

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const filteredSearch = (items, searchByTitle) => items?.filter((item) => item?.title?.toLowerCase().includes(searchByTitle?.toLowerCase()))
    const filteredItemsByCategory = (items, searchByCategory) => items?.filter((item) => item?.category?.name?.toLowerCase().includes(searchByCategory?.toLowerCase()))
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredSearch(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter((item) => item?.title?.toLowerCase().includes(searchByTitle?.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [searchByCategory, searchByTitle, items])


    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
                searchByCategory,
                setSearchByCategory
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
