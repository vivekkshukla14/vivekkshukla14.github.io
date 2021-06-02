import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer id="contact" className="">
        <div className="main-content">
          <div className="left box color2">
            <h2>About Me</h2>
            <div className="footer-content">
              <p className="">{resumeData.footerAbout}</p>
              <div className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <a href={item.url} rel="noreferrer">
                        <span className={item.className}></span>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="center box color2">
            <h2>Address</h2>
            <div className="footer-content">
              {resumeData.contactDetails &&
                resumeData.contactDetails.map((item) => {
                  return (
                    <div className={item.field}>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {" "}
                        <span className={item.className}></span>{" "}
                      </a>
                      <span className="text">{item.detail}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="right box color2">
            <h2>Contact us</h2>
            <div className="footer-content">
              <form
                action="https://mailthis.to/vivek.kshukla14@gmail.com"
                method="post"
              >
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
