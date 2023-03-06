import React from 'react';

function Landing() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <Container fluid className="landing-grid">
        <Row>
          <Col>
            <div className="banner-text">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFUJkIccsHlJLhJL7o1zWNAGmhh6NYIXHLw&usqp=CAU"
                alt="avatar"
                className="avatar-img"
              />
              <h2>Software Engineer</h2>
              <h3>Full Stack Web Developer</h3>
              <p>Hi, I am a software developer proficient in the MERN stack.</p>
              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/austin-jnr-a9601525a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/Austinjnr" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/AustinWalkker" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;

