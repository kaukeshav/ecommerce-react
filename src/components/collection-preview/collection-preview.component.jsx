import React from 'react';
import './collection-preview.styles.scss';
import { CollectionItem } from '../index';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className='collection-preview__heading'>{title}</h2>
      <div className='collection-preview__items'>
        {items
          .filter((item, index) => index < 4)
          .map(eachItem => (
            <CollectionItem key={eachItem.id} item={eachItem}></CollectionItem>
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
