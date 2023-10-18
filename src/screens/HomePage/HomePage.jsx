import React from 'react';

import { ShoppingCartConnected, ProductList } from '@components';
import { Nav } from '@base-components';

export default function StoreHomePage() {
  return (
    <div>
      <Nav logoUrl="/Afek-Sakaju/grocery-store/shop-logo.png">
        <ShoppingCartConnected />
      </Nav>
      <ProductList />
    </div>
  );
}
