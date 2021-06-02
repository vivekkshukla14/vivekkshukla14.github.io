import React, { Component } from "react";
export default class Employment extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section id="employment" className="content">
          <div className="">
            <span className="heading color1">Employment</span>
          </div>
          <div className="">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="">
                    <div className="">
                      <h3 className="sub-heading color2">{item.CompanyName}</h3>
                      <p className="heading1 color1">{item.specialization} </p>
                      <p className="heading2 color2">
                        {item.startDate}
                        <span> - </span> {item.endDate}
                      </p>
                      <p className="normal-text">{item.Description}</p>
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
