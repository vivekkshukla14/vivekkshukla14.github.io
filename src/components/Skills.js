import React, { Component } from "react";
export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section id="skills" className="content">
          <div className="heading color1">
            <span>{resumeData.skillsDescription}</span>
          </div>
          <br />
          <div className="skills-sets">
            {resumeData.skills &&
              resumeData.skills.map((item) => {
                return (
                  <div className="container">
                    <h2 className="sub-heading color2 text-uppercase">
                      {item.skillname}
                    </h2>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: item.skillvalue }}
                        aria-valuenow={item.skillvalue}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}
