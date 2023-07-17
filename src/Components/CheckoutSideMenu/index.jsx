import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from '../OrderCard'
import { totalPrice } from "../../Utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext)

	const deleteFromCart = (id) => {
		const newProducts = context?.cartProducts?.filter((product) => product.id !== id)
		context.setCartProducts(newProducts)
	}

	const handleCheckout = () => {
		const orderToAdd = {
			date: '01.02.2023',
			products: context.cartProducts,
			totalProducts: context.cartProducts.length,
			totalPrice: totalPrice(context.cartProducts)
		}

		context.setOrder([...context.order, orderToAdd])
		context.setCartProducts([])
		context.setSearchByTitle(null)
	}
	return (
		<aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<div>
					<XMarkIcon className="h-6 w-6  text-black cursor-pointer"
						onClick={() => context.closeCheckoutSideMenu()} />
				</div>
			</div>
			<div className='px-6 overflow-y-scroll flex-1'>

				{
					context.cartProducts?.map(product =>
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageUrl={product.images?.[0]}
							price={product.price}
							deleteFromCart={deleteFromCart}
						/>)
				}
			</div>
			<div className='px-6 mb-6 '>
				<p className='flex justify-between items-center mb-2'>
					<span className='font-light'>Total:</span>
					<span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
				</p>
				<Link to='/my-orders/last'>
					<button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()} >Checkout</button>
				</Link>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
