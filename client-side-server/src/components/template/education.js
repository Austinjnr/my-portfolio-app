import React from 'react';

function Education(props) {
  return (
    <Row>
      <Col md={4}>
        <p>{props.startYear} - {props.endYear}</p>
      </Col>
      <Col md={8}>
        <h4 style={{marginTop:'0px'}}>{props.schoolName}</h4>
        <p>{props.schoolDescription}</p>
      </Col>
    </Row>
  );
}

export default Education;