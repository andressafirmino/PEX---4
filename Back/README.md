# Resume
This project is a simple and practical API designed to modernize the service provided by a snack bar. The idea is to optimize product management, aiming to improve the experience for both those who place orders and those who serve them.

[Project link](https://github.com/andressafirmino/PEX-3)

#### Features.

- Creating a user profile.

- Search for a user.

- Adding a new product if you have an administrator profile.

- Search list of registered products.
 
# Technologies used
For this project, the following were used:

- Node (v22 or higher — *Note: Prisma 7 may have compatibility issues with Node 21*);
- Express;
- TypeScript;
- Prisma;
- PostgreSQL.

# How to run in development?
To run this project under development, you need to follow the steps below:

1. Have the [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) tools installed on your machine to be able to work on the project; 
2. Clone this repository from GitHub to your machine: [https://github.com/andressafirmino/PEX-3](https://github.com/andressafirmino/PEX-3);
3. Enter the project folder on your machine, open the terminal and download the necessary dependencies with the command: `npm install`;
4. Create the .env file in the project root and configure the variables according to the .env.example file.
5. Apply the migrations using the command: `npm run dev:migration:run`;
6. Populate the Seed Database using the command: `npm run dev:seed` (creates the admin and the 12 products for the mocked menu). If `prisma db seed` fails with `ERR_REQUIRE_ESM`, use Node 22+ or simply run `npm run dev:seed` (which executes the seed directly);
7. To run the project in development, run the command `npm run dev`

## Product Images

The database only stores the **image URL** in the `imageUrl` field (not the file itself).

- Files are located in `Back/public/images/{snacks|drinks|desserts}/`
- The API serves them at `http://localhost:4000/images/...`
- The seed populates complete URLs, e.g., `http://localhost:4000/images/snacks/aipim-carne.jpg`


# How to run it in production?
To compile the code and start the application in a production environment:

1. Run the command: `npm run start`