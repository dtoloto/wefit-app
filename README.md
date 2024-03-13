# Challenge React + TypeScript + styled-components

The challenge consists of creating a simplified e-commerce website from scratch, where the candidate will have to create a flow with three modules/screens.

They are:

 - **Home**: Where they will have to make a request to the API, thus
   bringing the list of movies that can be added to the cart. 
   
   **Cart**: Where they can see the items that have been added, totaling the
   overall value based on each added item, with the option to remove an
   item from the cart. By default, if the cart has no items added, the
   empty screen should appear with the option to return to the home
   screen. 
   
   **Purchase** completed: After confirming the order on the previous
   screen, the user should be redirected to the confirmed order screen.
   Here, the user will also have the option to return to the home
   screen.

[Figma Prototype](https://www.figma.com/file/0ZyTELvPCSCnib16XG49YP/Teste-Front-React-WeFit---2022?node-id=0:1)
[DEMO](https://wefit-app.vercel.app/)

The project was created using NextJS 14, so to run it locally, it's recommended to use `Node.js version >= v18.17.0`. In my case, I used `Node.js version 21` :

 - `nvm install 21`
 - ` nvm use 21`

Before running it, please create a `.env.local`  file following the `.env.example`.

The steps to run it locally are:

 1. Install all the dependencies using `yarn install` 
 2. Run the following command to start the json-server `json-server`
 2. Run `yarn dev` 
 3. The application should be available in `http://localhost:3000`

 