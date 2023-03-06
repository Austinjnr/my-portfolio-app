import React from 'react';

function Experience(props) {
  return (
    <Row>
      <Col md={4}>
        <p>{props.startYear} - {props.endYear}</p>
      </Col>
      <Col md={8}>
        <h4 style={{marginTop:'0px'}}>{props.jobName}</h4>
        <p>{props.jobDescription}</p>
      </Col>
    </Row>
  );
}

export default Experience;
