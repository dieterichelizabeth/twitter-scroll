import Card from "react-bootstrap/Card";
import { trends } from "../../../../data/trends";

function TrendCards() {
  return (
    <>
      {trends.map((trend) => (
        <>
          <article>
            <header className="mb-1">
              <Card.Text className="text-muted mb-0">
                Trending Worldwide
              </Card.Text>
              <Card.Text className="hashtag">
                <b>#{trend.type}</b>
              </Card.Text>
            </header>

            {trend.hasWebsite ? (
              <>
                <Card className="website--card">
                  <Card.Body className="row d-flex p-0">
                    <div className="w-75 px-4 pt-2 font--sm">
                      <b className="text-muted mb-0 font--sm">
                        {trend.siteTitle}
                      </b>
                      <p>{trend.siteDesc}</p>
                    </div>

                    <Card.Img
                      className="website--card__img"
                      variant="top"
                      src={trend.photo}
                    />
                  </Card.Body>
                </Card>
              </>
            ) : (
              <Card.Text className="text-muted mb-0">
                {trend.tweets} Tweets
              </Card.Text>
            )}

            <footer>
              <Card.Text className="text-muted pt-1">
                {trend.people} people are Tweeting about this
              </Card.Text>
            </footer>
          </article>

          <hr></hr>
        </>
      ))}
    </>
  );
}

export default TrendCards;
