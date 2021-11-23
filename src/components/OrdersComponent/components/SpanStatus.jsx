import React from 'react';
import { oneOf, bool } from 'prop-types';
import cx from 'classnames';
import './SpanStatus.css';

const cbn = 'span-status';

const SpanStatus = ({ children, theme, rounded, className, contenteditable, onBlur }) => {
  const Component = 'div';

  return (
    <Component
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      contenteditable={contenteditable}
      onBlur={onBlur}
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