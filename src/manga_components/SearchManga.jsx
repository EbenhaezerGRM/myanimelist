import React, { useState } from "react";
import Axios from "axios";
import { Row, Col, Container, Card } from "react-bootstrap";

const SearchManga = () => {
  const [searchText, setSearchText] = useState("");
  const [anime, setManga] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
      alert("Please enter anime or manga title");
      return;
    }
    Axios.get(`${process.env.REACT_APP_BASE_URL}/manga/search?q=${searchText}`).then((response) => {
        console.log(response.data);
        setManga(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input className="searchForm"
          placeholder={"Search anime and manga"}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button className="searchButton">🔎</button>
      </form>

      <Container>
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
  </>
  );
}

export default SearchManga