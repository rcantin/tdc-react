import React from "react";
import orbDance from "../img/orbs/wshadow/wtext/dance.svg";
import { Nav, Card } from "react-bootstrap";

class Dance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({
      key: key,
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <img src={orbDance} alt="Dance" width="120" height="120" />
        </div>

        <Card bg="light" className="shadow">
          <Card.Body>
            <Nav className="justify-content-center" variant="pills" defaultActiveKey={this.state.selected} onSelect={this.handleSelect}>
              <Nav.Item>
                <Nav.Link eventKey={1} title="Sweet Dreamers">
                  Sweet Dreamers (18-36 months)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={2} title="Recreational">
                  Recreational
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" title="Pre-Competitive">
                  Pre-Competitive
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4" title="Competitive">
                  Competitive
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5" title="Private Lessons">
                  Private Lessons
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6" title="Summer Classes">
                  Summer Classes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7" title="Adult Classes">
                  Adult Classes
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8" title="Faculty">
                  Faculty
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Dance;
