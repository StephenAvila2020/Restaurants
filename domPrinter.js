// Builds and returns HTML string for a restaurant card
const buildRestaurantCard = (singleRestaurant) => {
    return `<div class="restaurant-card">
        <a href="${singleRestaurant.url}" target="_blank">
            <h3>${singleRestaurant.name}</h3>
        </a>
        <p>
            Address: ${singleRestaurant.address}</p>
        <p>
            Average User Rating: ${singleRestaurant.averageUserRating}
        </p>
        <p>
            Average Cost For Two: $${singleRestaurant.averageCostPerTwo}
        </p>
        <a href="${singleRestaurant.menuURL}" target="_blank">
            <button>View Menu</button>
        </a>
      </div>`;
  };

  const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
      const htmlString = buildRestaurantCard(restaurantObjectInLoop);
      document.querySelector("#restaurant-container").innerHTML += htmlString;
    });
  };

  export default printAllRestaurants;