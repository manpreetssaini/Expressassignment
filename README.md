EXPRESS APP FOR CLOTHING PRODUCTS

This application was built using ExpressJS and runs on local host 3000.
To start the application : npm run dev

This application stores several different clothing products in a JSON file.
To get access to the application data, the user would need to create and account by registering on /register route.
Once the user has registered they would be expect to log in on the /login route.

Below is the list of functional routes in this application. (http://localhost:3000/)

	GET /register: Registers a new user on the user.json file.
	GET /login: Verifies user name and password and grants access to the user
	GET /products: Get a list of all available products
	GET /db/products:id: Gets a specific product by ID selected
	POST /db/products: Creates a new product
	PUT /db/products/:id: Updates existing products
	DELETE /db/products/:id: Deletes and existing product


