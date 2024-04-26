import { get, post } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function create (data) {
  return post('restaurants', data)
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

export { getAll, getDetail, getRestaurantCategories, create }
