# E-commerce Back End
  ![license badge](https://img.shields.io/badge/license-MIT-yellowgreen.svg)

## Description
This is a back end application to manage inventory for an e-commerce store. This interactive back end uses Express.js to build out an API and then employs Sequelize to interact with the e-commerece inventory which is stored in a MYSQL database. The dynamic interactivity of this application allows the inventory manager to access data; create new categories, products, or tags; update properties, and delete items that are no longer necessary.  

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Visuals](#visuals)

## Installation

To install and use this application: clone this application from Github. Once it is on your local computer open the integrated terminal and run npm i in the command line to install the dependencies. Create a .env file in the root to store your database, MYSQL username, and password in a secure file. In the terminal, log in to the MYSQL shell to source the schema.sql file which will create the database. Now you will be able to seed the database. Exit the MYSQL shell and run npm run seed in the command line. Once seeded run npm start in the command line. Expect to see the phrase App listening on port 3001! on the command line. Congratulations, your server is now running. 

## Usage

Use Insomnia to interact with the inventory, utlizing the drop down to GET, POST, PUT, or DELETE. This back end application has all routes in place so that all you have to do as a user is make sure that you have the proper endpoints called in the URL and that JSON format is selected from the dropdown.

## License
  
  This project uses the MIT license. 
  **If you have questions on the license please check the following site [choose a license](https://www.google.com)

## Contributing

To contribute to this application, feel free to send me an email.

## Tests

There is no testing in place for this application currently.

## Questions

Please feel free to explore my other projects on github: [tracyroseguajardo](https://www.github.com/tracyroseguajardo)

If you have further questions you may send me an email at: tracyroseguajardo@gmail.com

## Visuals

Link to walkthrough video:
[E-commerce Back End walkthrough video]()