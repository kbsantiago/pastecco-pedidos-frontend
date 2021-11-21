import React from 'react';
import { oneOf, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './SpanStatus.css';

const cbn = 'span-status';

const SpanStatus = ({ children, to, theme, rounded, className }) => {
  const Component = to ? Link : 'span';

  return (
    <Component
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      to={to}
    >
      {children}
    </Component>
  )
}

SpanStatus.propTypes = {
  rounded: bool,
  theme: oneOf([
    'contained-green-disabled',
    'contained-orange-disabled',
    'contained-red-disabled'
  ]),
};

export default SpanStatus;