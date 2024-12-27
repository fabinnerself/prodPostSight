# Ultimate product/post/sightseeings API 

This Node.js and Express REST API (no database connection), built with TypeScript, enables you to perform CRUD operations on products. These operations include listing all products, retrieving a specific product, deleting existing products, creating new products, and modifying existing products.


## Features

- **Node.js:** A JavaScript runtime environment used for server-side development.

- **Express.js:** A popular web framework built on top of Node.js for creating web applications and APIs.

- **TypeScript:** A superset of JavaScript that adds optional static typing for improved maintainability and developer experience.

- **License:** MIT, can be used for any personal or commercial project while maintaining this README.md, the authors' name, and the MIT license.


## Live API:

Access the live API at: [https://first-api-beryl.vercel.app/](https://first-api-beryl.vercel.app/)

# API Documentation

**Product Data Structure**

```
JSON 
{
  "id": number,
  "name": string,
  "description": string,
  "price": number
}

```

## API Endpoints:

* **GET:** https://first-api-beryl.vercel.app/ or https://first-api-beryl.vercel.app/products

  - Retrieves a list of all products.

  - Response Example:
 
      ```
      JSON 
      {
          "id":2,
          "name":"Xiomi a 10",
          "description":"celu descrip",
          "price":13.01
      },
      {
          "id":3,
          "name":"Product 03",
          "description":"description for Product 3",
          "price":39.990000
      }, ...  
        
      ```
* **GET:** https://first-api-beryl.vercel.app/product/{id}


  - Retrieves details of a specific product based on its ID.

  - Path Variable: {id} (replace with the product ID).

  - Response Example:

      ```
      JSON

      {
          "id":2,
          "name":"Xiomi a 10",
          "description":"celu descrip",
          "price":13.01
      }

      ```

* **POST:** https://first-api-beryl.vercel.app/product/

  - Creates a new product.
  - Request Body: Include the product details in the request body - JSOn format (see data structure example above).

* **DELETE:**  https://first-api-beryl.vercel.app/product/{id}

  - Deletes a product based on its ID.
  - Path Variable: {id} (replace with the product ID).

* **PATCH:**  https://first-api-beryl.vercel.app/product/{id}

  - Updates an existing product based on its ID.
  - Request Body: Include the modifications to be made in the request body (see data structure example above).

 
The GET, POST, DELETE, and PATCH operations validate input fields and IDs. Incorrect or missing data will trigger specific error messages.




## System Requirements

- **Operating System:** Ubuntu 22.04.4 LTS or Windows 10 Pro 1803 

- **NodeJS:** Version 18.20.4 or higher 

- **npm/npx:** Version 10.8.4 or higher 

    
## Alternative Systems Tested

The project has also been tested in the following alternative environment:

- **Operating System:** Windows 10 Pro 1803

- **NodeJS:** 18.20.4

- **npm/npx:** Version 10.8.4 or higher 



## Contributions

Contributions are welcome. If you find any errors or wish to add new features, feel free to open an issue, pull request, or fork the repository. This project is inspired by resources from:

YouTube: https://www.youtube.com/watch?v=B-T69_VP2Ls (Deploy an Express API to Vercel)
GitHub Repository: https://github.com/w3cj/express-api-starter-ts

## Useful Commands

View system information:

uname -r

sb_release -a

node -v

npm -v

## Project Structure

The project structure is:
```
readme.md
└── src/
├── app.ts
├── controller.ts
├── routes.ts
└── interfaces/
    ├── ErrorResponse.ts
    └── MessageResponse.ts
 
```
# Installation

To install, download the project from the repository:

```bash
  git clone https://github.com/fabinnerself/E5-pokedex-fmg.git

  Then run:

  npx create-express-api --typescript --directory [my-api-name]

  cd [my-api-name]

  npm i 

  npm run dev
```

You can publish in vercel this project installing:

```
    npm i -g vercel

    vercel --prod

```

(C) Favian M.G. 2024