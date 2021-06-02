import React, { Component } from "react";

export default class Parallax extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="section-div">
        <section className="bg-image">
          <div class="align-center container">
            <div class="row justify-content-center">
              <div class="">
                <h1 className="color2 display-3 text-center ">
                  <strong className="">{resumeData.name}</strong>
                  <br />
                  <h2 className="display-4"> {resumeData.role}</h2>
                </h1>

                <div className="parallax-details ">
                  {resumeData.parallaxDetails &&
                    resumeData.parallaxDetails.map((item) => {
                      return (
                        <div>
                          <a class="parallax-link" href={item.url}>
                            {item.detail}
                          </a>
                        </div>
                      );
                    })}
                </div>
                <div class="parallax-scroll-down text-center">
                  <div class="">
                    <div class="parallax-btn ">
                      <a href="#about">
                        <i class="fa fa-chevron-down fa-3x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
