import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
// import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <IconWrapper style={{ '--size': '24px' }}>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--size);
  margin: auto;
  right: 10px;
  pointer-events: none;
`;

const NativeSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  padding-right: 48px;
  background: #80808026;
  border-radius: 8px;
  color: ${COLORS.gray700};
  appearance: none;
  -webkit-appearance: none;

  &:hover,
  :focus {
    color: ${COLORS.black};
  }
`;

export default Select;
