import React from 'react';

function Contact() {
  return (
    <div className="contact-body">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Austin Obonyo </h2>
            <img
              src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a software developer proficient in the MERN stack.</p>
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <ul>
                <li>
                  <span style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0705939351
                  </span>
                </li>

                <li>
                  <span style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    AustinWalkker@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
