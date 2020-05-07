import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"
import searchEvent from "./eventListeners.js"

// Print all of the restaurants
apiManagerObject.getAllRestaurantsFromAPI()
  .then((parsedRestaurants) => {
    printAllRestaurants(parsedRestaurants);
  });

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", searchEvent);

  // Add a keypress event to the search input to check for an enter key
document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      searchEvent();
    }
  });

//     Instructions for step 1 of today's project. You should work on this individually, but you can ask for help from teammates or instructors and look at chapters/ example code
// Create a new project using the basicProj function. Inside your project, create a subdirectory called api and a json file named restaurants.json
// Copy and paste the following json data into restaurants.json
// 9:11
// restaurants.json 
// {
// "restaurants": [
// {
// "restaurant": {
// "R": {
// Click to expand inline (1,044 lines)


// 9:11
// 3. Start your json server with the command json-server -p 8088 -w restaurants.json
// 9:12
// (You'll need to run this command in the same api sub directory, but make sure that when you open your VS Code you open it from the same level of your index.html file, or Live Server won't show up. You may want to have two terminal windows open-- one to run json-server and one to do other stuff.)
// 9:13
// 4. In your JavaScript file, write a fetch call that fetches the data from your json-server.
// 5. Print the name of each restaurant to the DOM
// 9:13
// We're going to let y'all get started on that and then post instructions for the next part of the exercise in a bit!
// 9:14
// If you have any questions about what you're supposed to be doing, ask away!

// Here are some options of things to work on once you get your restaurant names printing to the DOM. These are optional. You can also go to lab time, work on previous exercises, or work on resume text. If you need help figuring out the best use of your time today, feel free to ask us!
// UI/ UX enhancements before you go on to stretch goals:
// Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
// Make each restaurant's name a hyperlink to their website
// Style each restaurant as a card, and add a card to each button that says "View Menu". This button should be a hyperlink to the restaurant's menu.
// Stretch Goal 1:
// Add a search bar and button to your app. When the user enters a series of letters into the search bar and presses the "search" button, print all of the restaurants whose name includes the string that the user entered. json-server has built in search functionality-- take some time to read the docs before you attempt this.
// Stretch Goal 2:
// Refactor your search bar so that the user can press the "Enter" key and see the same results as if they hit the search button.
// If you get done with all this, we have additional stretch goals for you-- 

