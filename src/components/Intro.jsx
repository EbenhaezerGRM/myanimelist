import { Row, Col, Container} from "react-bootstrap";

function Intro () {
    return(
        <div className="intro">
        <Container className="text-black text-center d-flex justify-content-center align-tems-center">
          <Row>
            <Col>
            <div className="intro">TRACK YOUR FAVORITE ANIME AND MANGA</div>
            </Col>
          </Row>
        </Container>
      </div>  
    );
}

export default Intro;