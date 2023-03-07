import React, { Component } from 'react';
import AddProject from './addproject';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>
          <h1>working progress</h1>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.wsj.net/im-585073?width=1280&size=1.33333333) center / cover'}} >BLOG POST</CardTitle>
            <CardText>
            From the best Nike running shoes and trail running shoes to the Nike sneakers you'll see in many a fashion week street style gallery, this blog presents you with the best Nike trainers in 2023.
            <p1 className="card-text">Skills: react, bootstrap, reactjs, chartjs, react-chartjs-2, coronavirus, coronavirus-tracking, coronavirus-info.</p1>
            </CardText>
            <CardActions border>
              <Button colored>Remove</Button>
              <Button colored>Update</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.pngitem.com/pimgs/m/279-2790249_kaws-gone-hd-png-download.png) center / cover'}} >All KAWS</CardTitle>
            <CardText>
            <p>All things kaws is a website on Kaws' acrylic paintings and sculpture which many repeating image patterns, all meant to be universally understood, surpassing languages and cultures.</p>
        <p1 className="card-text">Skills: react, bootstrap, HTML.</p1>
        
            </CardText>
            <CardActions border>
            <Button colored>Remove</Button>
              <Button colored>Update</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.pngitem.com/pimgs/m/479-4793047_weather-forecast-png-transparent-png-download.png) center / cover'}} >Weather App</CardTitle>
            <CardText>
            <p>This is a weather forecast application which updates after 3 hours.</p>
        <p1 className="card-text">Skills: HTML, CSS, JavaScript.</p1>
            </CardText>
            <CardActions border>
            <Button colored>Remove</Button>
              <Button colored>Update</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

</div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="edit" style={{textAlign: "center"}}>
        <h3>Create a Project here</h3>
        <AddProject />
      </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Edit</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
