import axios from "axios"
import { useEffect, useState } from "react"
import { Row, Col, Container, Card } from "react-bootstrap";

const TopAnime = () => {
    const [anime, setAnime] = useState([]);
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/anime`).then((response) => {
        setAnime(response.data);
      });
    }, []);
  
    return (
        <Container id="top-anime">
        <h1 className="pageTitle">TOP ANIME</h1>
          {anime.map((result, index) => (
            <Card className="mt-4"key={index} style={{ backgroundColor: "white", maxWidth: "800px", margin: "0 auto" }}>
              <Row className="gx-3">
                <Col xs={12} sm={4} md={3} lg={2} xl={2}>
                  <Card.Img
                    className="mx-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt={result.animeTitle}
                    src={result.animeImage}
                  />
                </Col>
                <Col xs={12} sm={8} md={9} lg={10} xl={10}>
                  <Card.Body>
                    <Card.Title>{result.animeTitle}</Card.Title>
                    <Card.Text>
                    Type: {result.type}
                    <br/>
                    Recent: {result.episode} Episode
                    <br/>
                    Score: {result.animeScore}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Container>
    );
  };
  
  export default TopAnime  

