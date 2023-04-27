import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

const Random = () => {
  const [randomAnime, setRandomAnime] = useState({});
  const [randomManga, setRandomManga] = useState({});

  useEffect(() => {
    const getRandomData = async (type) => {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${type}?limit=${randomPage}`
      );
      const randomIndex = Math.floor(Math.random() * response.data.length);
      if (type === "anime") {
        setRandomAnime(response.data[randomIndex]);
      } else {
        setRandomManga(response.data[randomIndex]);
      }
    };
    getRandomData("anime");
    getRandomData("manga");
  }, []);

  return (
    <Container className="random">
      <h1 className="pageTitle">RANDOM ANIME</h1>
      <Card
        className="mt-4"
        style={{ backgroundColor: "white", maxWidth: "800px", margin: "0 auto" }}
      >
        <Row className="gx-3">
          <Col xs={12} sm={4} md={3} lg={2} xl={2}>
            <Card.Img
              className="mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
              alt={randomAnime.animeTitle}
              src={randomAnime.animeImage}
            />
          </Col>
          <Col xs={12} sm={8} md={9} lg={10} xl={10}>
            <Card.Body>
              <Card.Title>{randomAnime.animeTitle}</Card.Title>
              <Card.Text>
                Type: {randomAnime.type}
                <br />
                Recent: {randomAnime.episode} Episode
                <br />
                Score: {randomAnime.animeScore}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <h1 className="pageTitle">RANDOM MANGA</h1>
      <Card
        className="mt-4"
        style={{ backgroundColor: "white", maxWidth: "800px", margin: "0 auto" }}
      >
        <Row className="gx-3">
          <Col xs={12} sm={4} md={3} lg={2} xl={2}>
            <Card.Img
              className="mx-auto"
              style={{ maxWidth: "100%", height: "auto" }}
              alt={randomManga.mangaTitle}
              src={randomManga.mangaImage}
            />
          </Col>
          <Col xs={12} sm={8} md={9} lg={10} xl={10}>
            <Card.Body>
              <Card.Title>{randomManga.mangaTitle}</Card.Title>
              <Card.Text>
                Type: {randomManga.type}
                <br />
                Recent: {randomManga.volume} Volume
                <br />
                Score: {randomManga.mangaScore}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Random;
