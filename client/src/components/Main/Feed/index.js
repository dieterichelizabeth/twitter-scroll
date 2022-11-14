import React, { useState, useEffect } from "react";
import Loading from "./Loader";
import Tweet from "./Tweet";
import { tweets } from "../../../data/tweets";

function Feed() {
  const availableTweets = tweets.length;
  const limit = 4;
  const startIndex = 0;

  const [atBottom, setAtBottom] = useState();
  const [endIndex, setendIndex] = useState(startIndex + limit);
  const [displayedTweets, setdisplayedTweets] = useState(0);
  const [selectedTweets, setSelectedTweets] = useState();
  const [showLoader, setshowLoader] = useState();

  // ---------- Handle loading/tweet display ------------ //
  useEffect(() => {
    if (atBottom === true) {
      setshowLoader(true);
      loadTweets();
      revert_atBottom();
    }
  }, [atBottom]);

  const loadTweets = () => {
    setTimeout(async () => {
      try {
        if (availableTweets > displayedTweets) {
          setdisplayedTweets(displayedTweets + limit);
          showTweets();
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setshowLoader(false);
      }
    }, 2000);
  };

  // Update Selected Tweets
  const showTweets = () => {
    // Grab the specific part of the array we want to display
    let selectedTweets = tweets.slice(startIndex, endIndex);
    setendIndex(endIndex + limit);
    setSelectedTweets(selectedTweets);
  };

  const revert_atBottom = () => {
    setTimeout(async () => {
      setAtBottom(false);
    }, 3000);
  };

  // ---------- Listen for bottom of feed ------------ //
  window.addEventListener("load", () => {
    createObserver();
  });

  function createObserver() {
    let target = document.querySelector("#amhere");
    // root: browser viewport, rootMartin: 0, threshold: 100% target visible
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    // create observer by calling constructor, passes handleIntersection function to be run when threshold is crossed
    let observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(target);
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
