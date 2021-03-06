import React, { Component } from 'react';
import './shoppage.styles.scss';
import SHOP_DATA from '../../data/shop.data';
import { CollectionPreview } from '../../components';

class Shoppage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default Shoppage;
