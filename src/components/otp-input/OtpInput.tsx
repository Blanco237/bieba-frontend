import React, { useEffect, useRef, useState } from "react";
import styles from './otp.module.css';

const length = 6;

interface OtpInputProps {
  setOtp: React.Dispatch<React.SetStateAction<string>>
}


const OtpInput:React.FC<OtpInputProps> = ({ setOtp }) => {
  const [otpArray, setOtpArray] = useState(new Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>(new Array(length));

  useEffect(() => {
    setOtp(otpArray.join(""));
  }, [otpArray]);

  const handleChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if(isNaN(Number(value))) return;

    setOtpArray((prev) => {
      const newOtp = [...prev];
      newOtp[idx] = value.substring(value.length - 1);
      return newOtp;
    });

    if(!value) return ;
    inputRefs.current[idx + 1]?.focus();

  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otpArray[idx] && idx > 0 && inputRefs.current[idx - 1]) {
        setTimeout(() => {
            inputRefs.current[idx - 1]?.focus();
        }, 1)
    }
  };

  return (
    <section className={styles.wrapper}>
        <h4 className={styles.title}>Enter the OTP code sent to your email</h4>
        <div className={styles.body}>
      {otpArray.map((value, idx) => {
        return (
          <input
            key={`otp-${idx}`}
            type="text"
            value={value}
            ref={(ref) => (inputRefs.current[idx] = ref)}
            onChange={(e) => handleChange(idx, e)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            autoFocus={idx === 0}
            className={styles.input}
          />
        );
      })}
    </div>
    </section>
  );
};

export default OtpInput;
