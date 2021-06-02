import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
export default class Education extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section id="education" className="content">
          <div>
            <span className="heading color1">Education</span>
          </div>
          <div className="">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div>
                    <br />
                    <CardGroup>
                      <Card
                        className="border-light"
                        style={{ backgroundColor: "#607D8B" }}
                      >
                        <Card.Body style={{ height: "auto" }}>
                          <Card.Title className="text-light">
                            <p className="sub-heading"> {item.course}</p>
                          </Card.Title>
                          <Card.Text>
                            <p className="">{item.universityName}</p>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <p className="text-light">{item.timeFrame}</p>
                          <large className="">{item.score}</large>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}
