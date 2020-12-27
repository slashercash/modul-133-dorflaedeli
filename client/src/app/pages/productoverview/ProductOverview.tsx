import React from 'react';

interface IProductOverview {
  match: {
    params: {
      id: number;
    };
  };
}

const ProductOverview = ({ match }: IProductOverview) => (
  <React.Fragment>
    <span>Produktübersicht</span>
    <span>{match.params.id}</span>
  </React.Fragment>
);

export default ProductOverview;
