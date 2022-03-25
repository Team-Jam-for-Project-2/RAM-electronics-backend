# RAM Electronics EStore

## Project Description

In this team project by Annie Courney, Mason Kang, and Jake Steele, we challenged ourselves to create an online webstore. It sells electronic products and has various ways to organize the navigate through the products to put them into your cart.

In this repository lies the backend: the data that seeds the API, the models that data is based off of, and the controllers to achieve complete CRUD functionality. There are currently features in the process of being built, namely a secure user authentication and a review system. 

## Screenshots of deployed app

Desktop view
<img width="1307" alt="Screen Shot 2022-03-25 at 10 58 03 AM" src="https://user-images.githubusercontent.com/97859358/160176496-f97febf4-38f1-4388-9856-5e40c176f381.png">

Mobile view

![Screen Shot 2022-03-25 at 10 59 20 AM](https://user-images.githubusercontent.com/97859358/160176637-f5986f1c-1cce-42c1-9a53-54c3a5b3203e.png)

## Tech Used

Javascript
router
passport
mongoose
mongo DB
postman
jsonwebtoken
express
bcrypt
axios
heroku
self made API
Visual Studio Code

## Link to API

https://thawing-mountain-85716.herokuapp.com/api/carts/
https://thawing-mountain-85716.herokuapp.com/api/items/


## Link to deployed app

https://ram-electronics.netlify.app/

## Link to GitHub repository

https://github.com/Team-Jam-for-Project-2/ram-electronics-backend

## Installation Instructions

1. Fork and clone the repo via either SSH or HTTPS key.
2. In terminal type: git clone [key]
3. In terminal move into the file,: to do so type: cd ram-electronics-backend
4. You will need to install several dependencies. Be sure to type in the following commands to terminal:
    npm i -y
    npm i axios
    npm i bcrypt
    npm i cors
    npm i dotenv
    npm i express
    npm i jsonwebtoken
    npm i mongoose
    npm i passport
    npm i passport-jwt
    npm i router
5. Once everything is installed open in VS code by typing into terminal: 
    code .
6. The "." on step 5 was important.
7. To open the server locally type into the terminal: 
    nodemon
8. Endpoints on routes can be tested via Postman or shown on the browser with a port of 4000:
    http:localhost:4000/api/items
    http:localhost:4000/api/carts

## Contribution Guidelines

RAM electronics is an open source project open to all suggestions of how to improve end user experience and the ease of engineering maintenance. Please don't hesitate to report a bug, submit new features or fixes, or to propose new features or methods for rendering already existing features.

Reporting bugs:
Create an issue in GitHub and describe the bug, how to produce the bug, and any ideas on how to fix it.

Add code:
Submit a pull request on GitHub.

## MVP Goals

Have items for sale.
Be able to organize these items.
Be able to put these items in a shopping cart.
Have understandable, pleasing CSS design.
Build an API from scratch and within the project achieve CRUD functionality.

## Stretch Goals

Modify the way the API works with the item quantity.
Have authenticated users.
Be able to make reviews.

## User Stories

As an online browser I want to be able to navigate the items in an organized fashion.
As a punctilious person I want to be able to see details about the products so that I can make decisions about their specific qualities.
As an online shopper I want to be able to see the price so that I can make good financial decisions.
As a private person I want to be certain that my information is safe so I don't have to cancel my credit cards, talk to the IRS, et cetera.
As a hesitant individual, I want the data of what is in my cart to be persisted so that I can take time to make my final decisions.

## Future Goals

Continue modifying API and routes.
Fully Authenticate discreet users.
Create a review system.


## Sources

Work done by Annie Courney, Myungsoo "Mason" Kang, and Jake Steele.

Esin Saribudak helped to get individual items into a single cart without replicates.

A special thank you to stack overflow and everybody who seriously answers questions on the internet.


## Original wireframes

![project2_-_wireframes](https://user-images.githubusercontent.com/97859358/160181501-d694ba17-255f-43ce-b0f2-d788e2f8f8d0.png)





