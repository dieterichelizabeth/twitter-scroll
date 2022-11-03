import Card from "react-bootstrap/Card";

function TrendCards() {
  const website = (
    <Card className="website--card">
      <Card.Body className="row d-flex p-0">
        <div className="w-75 px-4 pt-2 font--sm">
          <b className="text-muted mb-0 font--sm">Space</b>
          <p>Lunar photography improves the discovery of the moon</p>
        </div>

        <Card.Img
          className="website--card__img"
          variant="top"
          src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Card.Body>
    </Card>
  );

  return (
    <>
      {/* Sample Card With Website Card */}
      <article>
        <header className="mb-1">
          <Card.Text className="text-muted mb-0">Trending Worldwide</Card.Text>
          <Card.Text className="font-weight-bold">#BreakingNews</Card.Text>
        </header>

        {website}

        <footer>
          <Card.Text className="text-muted pt-1">
            10,094 people are Tweeting about this
          </Card.Text>
        </footer>
      </article>

      <hr></hr>

      {/* Sample Card Text Only */}
      <article>
        <header className="mb-1">
          <Card.Text className="text-muted mb-0">Trending Worldwide</Card.Text>
          <Card.Text className="font-weight-bold">#WorldNews</Card.Text>
        </header>
        <Card.Text className="text-muted mb-0">125K Tweets</Card.Text>
        <footer>
          <Card.Text className="text-muted">
            5,094 people are Tweeting about this
          </Card.Text>
        </footer>
      </article>

      <hr></hr>
    </>
  );
}

export default TrendCards;
