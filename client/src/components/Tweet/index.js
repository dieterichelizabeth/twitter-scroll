import Card from "react-bootstrap/Card";
import {
  svg__more,
  svg__comment,
  svg__reTweet,
  svg__heart,
  svg__upload,
} from "../../assets/svg";
import { tweets } from "../../data/tweets";

// TODO: Displaying time.

function Tweet() {
  function matchHashtag(tweet) {
    let match = tweet.match(/#[\w\d]+/g);

    if (match === null) {
      return <Card.Text>{tweet}</Card.Text>;
    } else {
      let arr = tweet.split(" "); // Turn to array
      let index = arr.indexOf(match.toString()); // get the index of the hashtag
      arr = arr.slice(0, index); // remove the hashtag
      let str = arr.join(" "); // join the array

      return (
        <Card.Text>
          {str}{" "}
          {match.map((word) => (
            <span className="color--blue">{word}</span>
          ))}
        </Card.Text>
      );
    }
  }

  function displayCount(count) {
    return count === "0" ? null : count;
  }

  return (
    <>
      {tweets.map((tweet) => (
        <Card key={tweet.name}>
          <Card.Body className="d-flex flex-row">
            {/* Profile Photo */}
            <Card.Img
              variant="top"
              src={tweet.profile_photo}
              className="card--img image__profile mr-1"
            />

            {/* Tweet Body */}
            <div className="tweet--form ml-1">
              {/* Tweet Header */}
              <header className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <Card.Title className="mr-1 mb-0">{tweet.name}</Card.Title>
                  <Card.Subtitle className="pt-2  text-muted">
                    @{tweet.username} &#8226; 3m
                  </Card.Subtitle>
                </div>
                <span>{svg__more}</span>
              </header>

              {/* Tweet Content */}
              <div>
                {matchHashtag(tweet.text)}

                {tweet.photo ? (
                  <img
                    src={tweet.photo}
                    alt="comedy"
                    className="w-100 mb-2"
                  ></img>
                ) : null}
              </div>

              {/* Tweet Actions */}
              <footer className="row d-flex justify-content-between text-primary pt-1 pl-3 w-75">
                <div>
                  {svg__comment} {displayCount(tweet.comments)}
                </div>
                <div>
                  {svg__reTweet} {displayCount(tweet.reTweets)}
                </div>
                <div>
                  {svg__heart} {displayCount(tweet.likes)}
                </div>
                <div>
                  {svg__upload} {displayCount(tweet.uploads)}
                </div>
              </footer>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Tweet;
