import React, { Component } from 'react';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card style={{ minWidth: '450px', margin: 'auto' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/e8/f0/f7/e8f0f7a58d3d4aa62c0b163369cc7e9e.jpg" style={{ height: '176px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{ color: '#27221F' }}>BLOG POST</Card.Title>
              <Card.Text>
                From the best Nike running shoes and trail running shoes to the Nike sneakers you'll see in many a fashion week street style gallery, this blog presents you with the best Nike trainers in 2023.
              </Card.Text>
              <Card.Text>
                Skills: React, JS, CSS, Html.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Remove</Button>
            </Card.Footer>
          </Card>

          {/* Project 2 */}
          <Card style={{ minWidth: '450px', margin: 'auto' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/8a/4f/17/8a4f174260b25591f42d5ff9e7f7e2d3.jpg" style={{ height: '176px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{ color: '#27221F' }}>COVID-19 STATISTICTS</Card.Title>
              <Card.Text>
                COVID-19 Anchor's primary objective is to provide a reliable tracking system to monitor Coronavirus cases across the globe, with the aid of informing the public and fostering improvement and stability in the health sector.
              </Card.Text>
              <Card.Text>
                Skills: react, bootstrap, reactjs, chartjs, react-chartjs-2, coronavirus, coronavirus-tracking, coronavirus-info.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Remove</Button>
            </Card.Footer>
          </Card>

          {/* Project 3 */}
          <Card style={{ minWidth: '450px', margin: 'auto' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/ea/91/42/ea9142505eb482e1a492ff442a45a4fe.jpg" style={{ height: '176px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{ color: '#27221F' }}>All Kaws</Card.Title>
              <Card.Text>
                All things kaws is a website on Kaws' acrylic paintings and sculpture which many repeating image patterns, all meant to be universally understood, surpassing languages and cultures.
              </Card.Text>
              <Card.Text>
                Skills: JS, CSS, HTML.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Remove</Button>
                      </Card.Footer>
                    </Card>
                  </div>
                );
              } else if(this.state.activeTab === 1) {
                return (
                  <div style={{ minWidth: '450px', margin: 'auto' }}>
                    <h2>Add a Project and Skills</h2>
                    <Button variant="primary">Add New Project</Button>
                  </div>
                );
              } 
            }

            render() {
            return(
            <div>
            <Tabs activeKey={this.state.activeTab} onSelect={(tabId) => this.setState({ activeTab: tabId })} fill>
            <Tab eventKey={0} title="Projects"></Tab>
            <Tab eventKey={1} title="Add Project"></Tab>
            </Tabs>
            <div className="content">{this.toggleCategories()}</div>
  </div>
);
}
}

export default Projects;
            
              