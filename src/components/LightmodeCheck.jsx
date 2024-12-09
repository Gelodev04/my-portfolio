import React from 'react';
import styled from 'styled-components';

const LightModeCheckbox = ({isChecked, onChange}) => {
  return (
    <StyledWrapper isChecked={isChecked}>
      <div className="content ">
        <label className="checkBox">
          <input  type="checkbox"
          onChange={onChange}
          checked={isChecked}
          />
          <div className="transition  " />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .clear {
    clear: both;
  }

  .checkBox {
    display: block;
    cursor: pointer;
    width: 10px;
    height: 10px;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 1px;
    position: relative;
    overflow: hidden;
     box-shadow: 0px 0px 0px 2px ${(props) => (props.isChecked ? '#000' : '#fff')};
  }

  .checkBox div {
    width: 60px;
    height: 60px;
    background-color: ${(props) => (props.isChecked ? '#000' : '#fff')};
    top: -52px;
    left: -52px;
    position: absolute;
    transform: rotateZ(45deg);
    z-index: 100;
  }

  .checkBox input[type=checkbox]:checked + div {
    left: -10px;
    top: -10px;
  }

  .checkBox input[type=checkbox] {
    position: absolute;
    left: 50px;
    visibility: hidden;
  }

  .transition {
    transition: 300ms ease;
  }`;

export default LightModeCheckbox;
