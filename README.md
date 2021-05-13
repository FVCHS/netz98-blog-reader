# Installation

## Prerequisites

To run this project you need  all of the following prerequisites:
* Git - [Download & Install Git](https://git-scm.com/downloads).
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
* Composer - [Download & Install Composer](https://getcomposer.org/download/)
* Symfony - [Download & Install Symfony](https://symfony.com/download)

## Setup
  
Run the following commands on the command line:

    git clone https://github.com/FVCHS/netz98-blog-reader.git
    cd netz98-blog-reader
    composer install
    npm install

## Run

Compile the assets by executing:

    npm run dev

Start the Symfony local test server:

    symfony serve

# Description

This demo project reads out and displays the data from `https://dev98.de/feed`. It uses Symfony and React to do so.

## Symfony Backend

Symfony is used for the backend implementation. There are two urls provided:

1. The route `/` provides the Basic HTML-Website which is rendered from a simple twig template.
2. The route `/blog` internally triggers a call towards the url `https://dev98.de/feed` and processes the data recieved
to be in the right format for the React application.
   
*The relevant files for the Backend implementation are located within the `/src` directory.*

## React Frontend

The React application is used to display the actual blog contents and to make them interactive. It comes with a list of
posts on the left and displays the selected post on the right side.

![alt text](https://github.com/fvchs/netz98-blog-reader/blob/main/private/media/netz98app.png?raw=true)

*The relevant files for the Frontend implementation are located within the `/assets` directory.*

---

*As a sidenote, the blog seems to provide a pagination functionality but in my case, for each page the same articles 
were returned so I did not get into implementing a pagination in the application. It would be quite easy to add though.*

*The following commit contains all the manual work done for this implementation: 
https://github.com/FVCHS/netz98-blog-reader/commit/cd216ca08a36762be6dbd24b891c5c22b080f2f7*