import Card from "react-bootstrap/Card";
import {
  svg_carrot,
  svg__comment,
  svg__reTweet,
  svg__heart,
  svg__upload,
} from "../../assets/svg";
import { tweets } from "../../data/tweets";

// TODO: If photo, display photo. Algorythm for displaying a time. If 0, don't display #. Regex for # color? Replace down arrow with ...

function Tweet() {
  return (
    <>
      {tweets.map((tweet) => (
        <Card>
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
                <span>{svg_carrot}</span>
              </header>

              {/* Tweet Content */}
              <div>
                <Card.Text>
                  {tweet.text}{" "}
                  {/* <span className="color--blue">#heregoesnothing</span> */}
                </Card.Text>
                <img
                  src={tweet.photo}
                  alt="comedy"
                  className="w-100 mb-2"
                ></img>
              </div>

              {/* Tweet Actions */}
              <footer className="row d-flex justify-content-between text-primary pt-1 pl-3 w-75">
                <div>
                  {svg__comment} {tweet.comments}
                </div>
                <div>
                  {svg__reTweet} {tweet.reTweets}
                </div>
                <div>
                  {svg__heart} {tweet.likes}
                </div>
                <div>
                  {svg__upload} {tweet.uploads}
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
