# twitter-scroll 🐥

Twitter-Scroll is a Twitter Hompeage Clone with "infinite scroll" on tweets. - [deployed link](https://dieterichelizabeth.github.io/twitter-scroll/)

The application's Feed component is built to handle an array of objects (36 tweets total from the data/tweet.js file). 4 tweets are displayed from the tweet.js file on load. The project uses intersection observer to track when the bottom of the feed is in view and displays 4 more tweets from the array. The # of tweets displayed from the array can be updated here in Feed/index.js (line 8) `const limit = 4;`

## Screenshots

<img width="1431" alt="Screen Shot 2022-11-15 at 12 43 37 AM" src="https://user-images.githubusercontent.com/95142863/201847658-9095e2e3-099b-42d8-80e8-1ab6a398e4eb.png">

## Technologies Used

<img src="https://img.shields.io/badge/react%20os-0088CC?style=for-the-badge&logo=reactos&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />

## Installation

Note: This project requires [Node.js](https://nodejs.org/en/). Here is a resource to get started: [How to Install NodeJS](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

In the terminal-

1. Check that node is installed

   ```
   node -v
   ```

2. Clone the repo

3. Install npm packages

   ```
   npm i
   ```

4. Start the application-

   ```
   npm start
   ```

## Documentation

- [Intersection Observer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
