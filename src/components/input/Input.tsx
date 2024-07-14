import React from "react";
import styles from "./input.module.css";

interface InputProps {
  name?: string;
  value: string;
  placeholder: string;
  label?: string;
  onChange?: (val: string) => void;
  type?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  label,
  onChange,
  type,
  id,
}) => {
  return (
    <div className={styles.body}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        id={id}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
