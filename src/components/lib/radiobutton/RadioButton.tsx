import React, { useState } from 'react';
import './Radiobutton.scss';

interface RadioButtonProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, checked, onChange }) => {
  return (
    <label className={'custom-radiobutton'}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className={'checkmark'}></span>
      <div className="label">
        {label}
      </div>
    </label>
  );
};

export default RadioButton;
