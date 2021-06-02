import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section id="projects" className="content">
          <div className="">
            <div className="">
              <h1 className="heading color1">Projects I have Worked On</h1>
            </div>
            <div className="">
              <div>
                {resumeData.projects &&
                  resumeData.projects.map((item) => {
                    return (
                      <Accordion>
                        <br />
                        <Card
                          className="card border-light bg-gradient"
                          style={{
                            backgroundColor: "#128C7E",
                          }}
                        >
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="ghost"
                              eventKey="0"
                              style={{
                                width: "100%",
                                backgroundColor: "#128c7e",
                                whiteSpace: "normal",
                              }}
                            >
                              <div className="sub-heading color1 text-justify text-wrap">
                                {item.projectName}
                              </div>
                              <div>
                                <p
                                  className="heading2 color2 text-justify text-wrap"
                                  style={{ float: "left" }}
                                >
                                  {item.timeFrame}
                                </p>
                                <Button
                                  className=""
                                  variant="dark"
                                  style={{ float: "right" }}
                                >
                                  View More Details
                                </Button>
                              </div>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <p className="normal-text color1 text-justify">
                                {item.description}
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
