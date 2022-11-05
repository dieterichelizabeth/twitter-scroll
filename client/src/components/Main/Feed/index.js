import React, { useState } from "react";
import Tweet from "../../Tweet";
import { tweets } from "../../../data/tweets";

function Feed() {
  console.log(tweets.length);
  // Loader Display State
  const [showLoader, setshowLoader] = useState(false);
  // control variables
  const available = tweets.length;
  const limit = 10;
  let displayed = 0;
  let startIndex = 0;
  let endIndex = startIndex + limit;
  const loaderEl = document.querySelector(".loader");

  // show the quotes
  const showTweets = () => {
    // Grab the specific part of the array we want to display
    let selectedTweets = tweets.slice(startIndex, endIndex);

    // Update the indexes
    startIndex = startIndex + limit;
    endIndex = startIndex + limit;

    // Display selected Tweets
    return <Tweet tweets={selectedTweets} />;
  };

  // Load Quotes
  const loadTweets = () => {
    console.log("here");
    // show the loading animation
    setshowLoader(true);
    return <p>hello</p>;
    // // 2 seconds later
    // setTimeout(async () => {
    //   try {
    //     // If there are still quotes to display - load the next batch and update the displayed
    //     if (available > displayed) {
    //       // showTweets();
    //       displayed = displayed + limit;

    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   } finally {
    //     setshowLoader(false);
    //   }
    // }, 2000);
  };

  // Check user's scroll
  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     const { scrollTop, scrollHeight, clientHeight } =
  //       document.documentElement;

  //     // If the user has scrolled to the bottom, and there are still quotes to display - load more quotes
  //     if (
  //       scrollTop + clientHeight >= scrollHeight - 5 &&
  //       available > displayed
  //     ) {
  //       loadTweets();
  //     }
  //   },
  //   {
  //     passive: true,
  //   }
  // );

  return (
    <>
      <div className={showLoader ? "show loader" : "loader"}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{loadTweets}</div>
    </>
  );
}

export default Feed;
