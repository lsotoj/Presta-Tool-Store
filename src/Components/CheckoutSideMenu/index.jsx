import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context";
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext)

	const deleteFromCart = (id) => {
		const newProducts = context?.cartProducts?.filter((product) => product.id !== id)
		context.setCartProducts(newProducts)
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
			<div className='px-6 overflow-y-scroll'>

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
		</aside>
	);
};

export default CheckoutSideMenu;
