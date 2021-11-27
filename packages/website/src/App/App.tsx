import React from 'react';
import "./App.css";
import { Header, Grid, Button, Segment, Divider, Icon} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

export const App = () => {
  const onItemClick = () => {

  };

  return (
    <Grid className="App">
      <Grid.Row centered verticalAlign="middle">
        <Grid.Column computer="4" largeScreen="6" tablet="12" mobil="14">

            <Header content="Documentation Solutions" size="huge" />

            <Divider />

            <Grid as="a" href="redocly.com">
              <Grid.Row>
                <Grid.Column width="8">
                  <Header content="Redocly" size="large"/>
                </Grid.Column>
                <Grid.Column width="8" textAlign="right" size="large">
                  <Icon color="black" name="arrow right" size="large"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row>
                <Grid.Column width="8">
                  <Header content="Stoplight" size="large"/>
                </Grid.Column>
                <Grid.Column width="8" textAlign="right">
                  <Icon name="arrow right" size="large"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
