import React from 'react';

const Header = ({title}) => {
    return (
      <h2 className="mb-3 text-center">
        <span className="title-style px-3 py-1">{title}</span>
      </h2>
    );
};

export default Header;