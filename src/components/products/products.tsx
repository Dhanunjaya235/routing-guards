import React, { FC } from 'react';
import './products.css';

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
  <div className="products" data-testid="Products">
    Products Component
  </div>
);

export default Products;
