import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      ImageService.getImages(query, page).then(({ photos, total_results }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...photos],
          showBtn: page < Math.ceil(total_results / 15),
        }));
        console.log(photos);
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1, showBtn: false });
  };

  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        <Grid>
          {this.state.images.map(({ alt, avg_color, id, src: { large } }) => {
            return (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={large} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {this.state.showBtn && (
          <Button onClick={this.onClickButton}>Load more</Button>
        )}
        {/* <Text textAlign="center">Sorry. There are no images ... 😭</Text> */}
      </>
    );
  }
}
