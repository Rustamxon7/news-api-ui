import React from 'react';

import './Button.scss';

export const NavButton = ({
  children,
  className,
  link,
  active,
  ...otherProps
}) => {
  return (
    <button
      className={
        active === link ? `${className} ${className}--active` : className
      }
      onClick={otherProps.onClick}
      onMouseDown={otherProps.onMouseDown}
    >
      {children}
    </button>
  );
};

export const MemoNavButton = React.memo(NavButton);

export const Button = ({ children, className, ...otherProps }) => {
  const classes = 'button ' + className;

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};
