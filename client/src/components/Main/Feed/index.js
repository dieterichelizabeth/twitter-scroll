import Tweet from "../../Tweet";
import { tweets } from "../../../data/tweets";

function Feed() {
  console.log(tweets.length);
  let selectedTweets = tweets;
  return (
    <>
      <div>
        <Tweet tweets={selectedTweets} />
      </div>
    </>
  );
}

export default Feed;
