import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="WeatherApp">
      <div className="WeatherAppContainer">
        <Container>
          <Row>
            <Form>
              <Col>
                <Form.Control type="email" placeholder="Enter a city" />
              </Col>
              <Col>
                <Button variant="outline-primary">Search</Button>{" "}
              </Col>
            </Form>
          </Row>
        </Container>
        <Container>
          <Row>
            <h1>Vienna</h1>
            <Col>
              <ul>
                <li>Thursday, 16:51</li>
                <li>Clear Sky</li>
              </ul>
            </Col>

            <Col>
              <ul>
                <li>
                  Humidity: <span>78</span>%
                </li>
                <li>
                  Wind: <span id>9</span>m/h
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          alt="Broken-clouds"
          id="icon"
        />
        <h2>0</h2>
        <p>°C</p>

        <div className="openSource">
          <small>
            <a
              href="https://github.com/natussshka/homework_week4_weatherapp"
              target="_blank"
            >
              Open source code
            </a>{" "}
            by Natalia Kubasi
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
