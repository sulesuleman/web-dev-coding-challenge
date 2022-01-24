Deployment Link: https://band-town.herokuapp.com

How to Run:

1. Clone the repository from provided url: https://github.com/sulesuleman/web-dev-coding-challenge
2. Command to clone the repository: git <space> clone <space> https://github.com/sulesuleman/web-dev-coding-challenge
3. Move into your project directory and type 'npm install' to install required packages.
4. Create .env file in your root directoy and add 'REACT_APP_API_URL', this will be the BaseURL for your APIs.
5. Run yarn start or npm start.

Project Flow:

1. Landing page -> search artist name -> hit Enter.
2. Artist Page -> artist will appear -> click aritst card -> modal will appear -> click 'See Events'.
3. Events Page -> all upcoming events will be shown here.

Arcitecture and Design:

1. Assets
   Contains all the Images and Fonts that will be used in the app.
2. Components
   Contains all the reusable components so that they dont need to repeat.
3. Context
   Contains the context API so that we dont have to do props drilling, and can use the same function or states in all components of our application.
4. Hooks
   These contains the custom hooks for handling of the states of our components and to keep the html separate from logic.
5. Navigation
   The navigation routes are configured here.
6. Pages
   Screens are created here.
7. Services
   Api request configurations are done here.
8. Styles (SCSS)
   Why Scss?
   SCSS is a preprocessor for CSS that allows nesting, variables, mixins or functions to reuse same styling.

Why this UI Library?
React Js is an open source javascript library used to develop creative User Interfaces.

1. Virtual DOM:
   I have used this library because it uses Virtual DOM instead of DOM what it means is that whenever any element changes instead of rerending the whole component it only rerenders that particular element.
   For Example:
   In this app when search value changes it only rerenders the new card instead of reloading whole component.
2. DRY (Dont Repeat Yourself):
   To make the code resuable all the common components are created in component folder, so that i dont have to repeat the same code again and again.

Libraries Used:

1. MomentJs
   Used to format date and time of artist events.
2. Framer Motion
   A React JS animation library that is used to animate popup and also heading in the app.
3. It is a java utility library that delivers modularity, enhance performance, in this app i have used 'isEmpty' to check if object is empty or not.
4. Axios
   Axios is used for api calls because the response returned from it is already in json format.
   It allows to configure default API BaseURL.
