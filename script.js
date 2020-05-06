fetch("http://localhost:8088/restaurants")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {
        console.log(parsedRestaurants)
// for loop and print to dom
        for (let i = 0;  i < parsedRestaurants.length; i++) {
            console.log(parsedRestaurants[i].restaurant.name)
            document.querySelector(".restaurantList").innerHTML += `<div class="card" style="margin: 2em;">
            <div><a href="${parsedRestaurants[i].restaurant.url}">${parsedRestaurants[i].restaurant.name}</a></div>
            <div>Address: ${parsedRestaurants[i].restaurant.location.address}</div>
            <div>Rating: ${parsedRestaurants[i].restaurant.user_rating.aggregate_rating}</div>
            <div>Average Cost for Two:$${parsedRestaurants[i].restaurant.average_cost_for_two}</div>
            <button><a href="${parsedRestaurants[i].restaurant.menu_url}">View Menu</a></button></div>
            `
        }
    })