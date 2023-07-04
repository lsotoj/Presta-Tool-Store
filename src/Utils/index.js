/*
* This function calculate total price of a new order
* @param {Array} products cartProdct: Array of Objects
* @return {number} Total price
*/
export const totalPrice = ( products ) => {
	return products.reduce((acc, product) => acc + product.price, 0 )
}