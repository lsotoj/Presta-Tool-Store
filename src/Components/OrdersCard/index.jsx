import { XMarkIcon } from "@heroicons/react/24/outline";


const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props



	return (
		<div className='flex justify-between items-center mb-3 border border-black rounded-lg'>
			<p>
				<span>01.02.2023</span>
				<span>totalProducts</span>
				<span>totalPrice</span>
			</p>
		</div>
	)
}

export default OrdersCard