// Function to filter restaurants based on search input
export const filterData = (searchInput, restaurantList) => {
  const filteredCards = restaurantList.filter(
    (restaurantList) =>
      restaurantList?.info?.name
        ?.toLowerCase()
        .includes(searchInput.toLowerCase()) // Making the search case-insensitive
  );
  return filteredCards;
};
