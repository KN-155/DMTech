export default {
  USER: state => state.user,
  USER_ID: state => state.user.id,
  USER_INFO: state => ({
    avatar: state.user.avatar,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    number: state.user.number
  }),
  USER_FAVORITES: state => state.user.favorites,
}