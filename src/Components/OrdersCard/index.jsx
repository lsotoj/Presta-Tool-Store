import { ChevronRightIcon } from "@heroicons/react/24/outline";


const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props



	return (
		<div className='mb-3 border border-black rounded-lg w-80 p-4'>
			<div className='flex justify-between items-center w-full '  >
				<p className='flex flex-col' >
					<span className='font-light' >01.02.2023</span>
					<span className='font-light' >{totalProducts} articles</span>
				</p>
				<p className='flex items-center gap-2'>
					<span className='font-medium text-2xl' >$ {totalPrice}</span>
					<ChevronRightIcon className="h-6 w-6  text-black cursor-pointer" />
				</p>
			</div>
		</div>
	)
}

export default OrdersCard