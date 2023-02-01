export const filterData=(restaurantList,serachText)=>{
    return restaurantList.filter(restaurant=>restaurant?.data?.name?.toLowerCase()?.includes(serachText.toLowerCase()))
}