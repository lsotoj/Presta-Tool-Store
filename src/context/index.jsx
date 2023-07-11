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

    console.log('Items=>', items);
    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState()

    // Electronics category
    const [elecronicsCategory, setElectronicsCategory] = useState([])

    // Clothes category
    const [clothesCategory, setClothesCategory] = useState([])

    // Shoes category
    const [shoesCategory, setShoesCategory] = useState([])

    // Furniture category
    const [furnitureCategory, setFurnitureCategory] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const filteredSearch = (items, searchByTitle) => items?.filter((item) => item?.title?.toLowerCase().includes(searchByTitle?.toLowerCase()))

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredSearch(items, searchByTitle))
    }, [searchByTitle, items])

    useEffect(() => {

    }, [items])
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
                setFilteredItems
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
