import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function CartWidget() {
const cantidad = 3;
  return (
    <>
      <span style={{ fontWeight: 'bold', color: 'red', fontSize: '20px' }}>
        {cantidad}
      </span>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
    </>
  );
}
export default CartWidget;
