import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
            <img
              src="https://e.snmc.io/i/600/s/8ca14e391fc00f250d6d7621d9c45095/9162792"
              alt="avatar"
              className="avatar-img"
              />
              <h2>Software Engineer</h2>
              <h3>Full Stack Web Developer</h3>
          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
          <p>Below are my social media accounts feel free to connect with me.</p>
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
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
