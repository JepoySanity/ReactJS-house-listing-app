## A mobile-first House Listing app using reactJS and firebase 9 with geocoding api 🏠 🔥

## Live Demo:
https://whimsical-banoffee-ee9d7f.netlify.app/

## Read more here:
https://firebase.google.com/

## Important note:
in order to use the geocoding API, you must register to google cloud platforms and get an API key for geocoding (has a free tier with 2500 free api calls per day but needs to submit a valid credit card for verification),
my API key wont work on your machine because it is only whitelisted to my own geocoding API, you also need to create an .env file on the root directory and paste your given API key i.e `REACT_APP_GEOCODE_API_KEY="AxzxSxxKxQL9xxxECd0E9tI_Cxhemxxxxxxxxxxxxx"`
if you dont wanna use the geocoding functionality go to src/pages/CreateListing.jsx then set the default state to `false`
