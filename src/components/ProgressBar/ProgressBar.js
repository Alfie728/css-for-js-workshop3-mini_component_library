/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--padding': 0 + 'px',
    '--radius-bar': 4 + 'px',
    '--radius-value': '4px',
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0 + 'px',
    '--radius-bar': 4 + 'px',
    '--radius-value': '4px',
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--radius-bar': 8 + 'px',
    '--radius-value': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper>
      <label for="loadinglabel">Loading:</label>
      <Progress
        id="loadinglabel"
        max="100"
        value={value}
        style={styles}
      ></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Progress = styled.progress`
  color: ${COLORS.primary};
  width: 370px;
  height: var(--height);
  border-radius: var(--radius-bar);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--radius-bar);
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--radius-value);
  }
`;

export default ProgressBar;
