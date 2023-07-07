import Cookies from 'js-cookie'

export const useUser = () => {
  const userDetails = Cookies?.get('user_details')
  const user = userDetails ? JSON.parse(userDetails) : null
  return user
}
