export default {
  ADS: state => state.ads,
  FAVORITE_ADS: state => favorites => state.ads
    .filter(item => ~favorites.indexOf(item.id)),
  MY_ADS: state => id => state.ads
    .filter(item => item.user === id),
  SORT_ADS: state => sort => state.ads
    .filter(item => item.category === sort[0] || !sort[0])
    .filter(item => item.subcategory === sort[1] || !sort[1]),
  AD_BY_ID: state => id => state.ads.find(ad => ad.id === id)
}