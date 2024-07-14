import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
    children: string
    variant?: 'primary' | 'outlined'
}

const Button:React.FC<ButtonProps> = ({ children, variant ='primary' }) => {
  return (
    <button className={`${styles.body} ${styles[variant]}`}>{children}</button>
  )
}

export default Button