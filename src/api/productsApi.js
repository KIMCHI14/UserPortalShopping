import { callAPIWithToken } from './axiosConfig'

export const getProducts = () => {
  return callAPIWithToken({
    url: '/products',
    method: 'GET',
  })
}
