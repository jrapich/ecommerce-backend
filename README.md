
  # ecommerce-backend
  <img src='./lib/badges/license.svg'>     <img src='./lib/badges/dotenv-8.2.0.svg'>     <img src='./lib/badges/express-4.17.1.svg'>     <img src='./lib/badges/mysql2-2.1.0.svg'>     <img src='./lib/badges/sequelize-5.21.7.svg'>
  
  
  ## Description
  This project utilizes sequelize to operate an SQL backend environment for an imaginary e-commerce company. This app can view, add, delete, and modify the company's data on the SQL server.      
  
  Completing this project was a good exercise in sequelize, and the starter code was greatly appreciated as the last several projects have been quite intense difficulty wise.    
  
  I had to do a little research on how multiple many-to-many relationships worked, and discovered the ProductTag model in this project serves as a join table so different tables can handle that many-to-many relationship.

  ## Installation
  Required for this project to function: 

  `node v18.17.0` or higher   
  
  `dotenv v8.2.0` 
  
  `express v 4.17.1` 
  
  `mysql2 v2.1.0` 
  
  `sequelize v5.21.7`     
  
  First clone this repository, then install necessary packages with 
  
  `npm install`  
  
  You will then need to create a .env file with the syntax as seen in the .env.EXAMPLE file:   

  `DB_NAME='ecommerce_db'`

  `DB_USER=''`

  `DB_PW=''`

  `sequelize` will then use these environtment variables to connect to the database. Requires SQL server and shell to be installed, of course.

  ## Usage
  This project is back-end only, but has functioning express routes which can be tested via Insomnia.     
  
  insert insomnia instructions here

  Link to project repository: [https://github.com/jrapich/ecommerce-backend](https://github.com/jrapich/ecommerce-backend)

  ## Tests
  no tests needed

  ## Credits
  no other contributors

  Fellow student Brian Whisler pointed out this resource which helped me with understanding the Tag/ProductTag many-to-many relationship:

  [https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/](https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/)

  As well as this video:

  [https://www.youtube.com/watch?v=4q-keGvUnag](https://www.youtube.com/watch?v=4q-keGvUnag)

  ## Contributing
  How to contribute:

  Please reach out to me at jeremysr@protonmail.com or make a pull request at [https://github.com/jrapich/ecommerce-backend](https://github.com/jrapich/ecommerce-backend)

  ## Questions?
  Any further questions, comments, or bug reports, can be sent to me at jeremysr@protonmail.com

  https://www.github.com/jrapich

  ## License
  This project protected under MIT License.

  All rights reserved. See /LICENSE for more information.

  