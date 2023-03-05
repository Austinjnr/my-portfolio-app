import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Skills = (props) => {
  return(
    <Grid>
      <Cell col={12}>
        <div style={{display: 'flex'}}>{props.skill}</div>
      </Cell>
    </Grid>
  );
};

export default Skills;
