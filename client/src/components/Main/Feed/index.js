import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { tweets } from "../../../data/tweets";
import Loading from "./Loader";

function Feed() {
  // control variables
  const available = tweets.length;
  const limit = 4;

  // Loader Display State
  const [showLoader, setshowLoader] = useState();
  const [startIndex, setstartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(startIndex + limit);
  const [selectedTweets, setSelectedTweets] = useState();
  const [displayCount, setdisplayCount] = useState(0);
  const [atBottom, setAtBottom] = useState();

  useEffect(() => {
    // show the loading animation
    if (atBottom === true) {
      setshowLoader(true);
      loadTweets();
      timer();
    } else {
      console.log("at bottom = ", false);
    }
  }, [atBottom]);

  const timer = () => {
    setTimeout(async () => {
      setAtBottom(false);
    }, 3000);
  };

  // Update Selected Tweets
  const showTweets = () => {
    // Grab the specific part of the array we want to display
    let selectedTweets = tweets.slice(startIndex, endIndex);

    // Update the indexes
    setstartIndex(startIndex + limit);
    setendIndex(endIndex + limit);

    console.log("start index :", startIndex, "end index: ", endIndex);

    // Display selected Tweets
    setSelectedTweets(selectedTweets);
  };

  const loadTweets = () => {
    console.log("available: ", available, "display count: ", displayCount);
    // 2 seconds later
    setTimeout(async () => {
      try {
        // If there are still quotes to display - load the next batch and update the displayed
        if (available > displayCount) {
          setdisplayCount(displayCount + limit);
          showTweets();
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setshowLoader(false);
      }
    }, 2000);
  };

  // Intersection observer - Listens for bottom of Feed
  let listening;

  window.addEventListener(
    "load",
    () => {
      listening = document.querySelector("#amhere");

      createObserver();
    },
    false
  );

  function createObserver() {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(listening);
  }

  const handleIntersect = () => {
    setAtBottom(true);
  };

  return (
    <>
      <div>
        {selectedTweets ? <Tweet tweets={selectedTweets} /> : null}
        {showLoader ? <Loading /> : null}
      </div>
      <p id="amhere" className="hidden--target">
        Scroll for More
      </p>
    </>
  );
}

export default Feed;
