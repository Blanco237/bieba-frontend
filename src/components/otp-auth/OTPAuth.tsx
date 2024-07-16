import React, { useState } from 'react'
import styles from './otpauth.module.css';
import Input from '../input/Input';
import OtpInput from '../otp-input/OtpInput';
import Button from '../button/Button';
import API from '../../api'

interface OTPAuthProps {
  apikey: string;
  onSuccess: (code: string) => void
}

const OTPAuth: React.FC<OTPAuthProps> = ({ apikey, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const data = {email, code: otp, key: apikey};
      const response = await API.post('/user/verify-totp', data);
      const { code } = response.data;
      onSuccess(code)
    } catch (e) {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.body}>
      <h5 className={styles.title}>
        Input Your Account email and app OTP to authenticate.
      </h5>
      <div className='w-full mb-5'><Input placeholder='Enter Email' value={email} onChange={(val) => setEmail(val)} /></div>
      <OtpInput setOtp={setOtp} hideTitle />
      <Button
              disabled={otp.length !== 6}
              loading={loading}
              fullWidth
              onClick={verifyOTP}
            >
              Confirm
            </Button>
    </div>
  )
}

export default OTPAuth