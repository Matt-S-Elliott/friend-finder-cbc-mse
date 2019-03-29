# friend-finder-cbc-mse


Friend Finder is a simple server based application which allows the user to take a 10 question quiz after providing a name and URL to an image. They are then given back a friend who answered similarly to them.

The website uses node.js and express for serverside code and bootstrap and jQuery for the front end. It is deployed through Heroku.

Express is the only dependecy.

The server.js file sets up the server, while htmlRoutes.js and apiRoutes.js handle the routing. htmlRoutes serves the two html pages, home.html and survey.html, while apiRoutes handles the post request for adding to the survey results array and a get request which gives back the results array.

There is no database connected, so the data only persists for that particular instance of the server. Data is handled by friends.js, which contains an array and a constructor for the objects that are entered into the array.

home.html just explains the website briefly and links to survey.html. survey.html contains the ten questions and input for a name and photo URL. It also posts data to the server and then displays a modal showing the servers response of the most compatible friend.

Upon receipt of the post request from survey.html, the apiRoutes.js builds an object and adds it to the friends.js array. Then it compares the data given by the user to all data present in the array, returning the most compatible friend.
