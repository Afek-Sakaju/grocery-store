import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export default function Button({
  children,
  className,
  label,
  onClickHandler,
  style,
  type,
}) {
  return (
    <StyledButton
      className={className}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler?.();
      }}
      style={style}
      type={type}
    >
      {label}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: undefined,
  onClickHandler: undefined,
  style: {},
  type: 'button',
};