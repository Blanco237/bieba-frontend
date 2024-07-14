import React from 'react'
import styles from './button.module.css'

interface ButtonProps {
    children: string
    variant?: 'primary' | 'outlined'
    onClick?: () => void;
    fullWidth?: boolean
    disabled?: boolean
    loading?: boolean
}

const Button:React.FC<ButtonProps> = ({ children, variant ='primary', onClick, fullWidth = false, disabled = false, loading = false }) => {
  return (
    <button disabled={disabled} onClick={() => {
      if(!disabled && !loading && onClick) onClick()
    }}  className={`${styles.body} ${styles[variant]} ${fullWidth ? 'w-full' : ''} ${loading ? styles.loading : ''}`} >{loading? 'Loading...' : children}</button>
  )
}

export default Button