import axios from 'axios'

export const getProduct = product => ({
	type: 'GET SINGLE PRODUCT',
	product: product,
})

export const loadSingleProduct = function (id) {
  return function (dispatch) {
    axios.get(`/api/products/${id}`)
    .then(function (res) {
      console.log(res)
      return res.data
    })
    .then(function (product) {
      const action = getProduct(product); // this should dispatch to our store as set single product to be all the product fetched via this api request
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};

export default function (state = {}, action) {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case 'GET SINGLE PRODUCT':
			newState = action.product
			break

		default:
			return state
	}

	return newState
}
