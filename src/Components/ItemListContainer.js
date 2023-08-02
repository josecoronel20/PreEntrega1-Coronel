import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={style.container}>
      <p style={style.msg}>{greeting}</p>
    </div>
  );
};

const style = {
    container : {
        width : '100vw',
        display : 'flex',
        justifyContent: 'center',
        padding: '5px'
    },
    msg: {
        fontSize: '1.5rem',
        color: '#f78c8c',
        fontWeight: 'bolder'
    }
}

export default ItemListContainer;
