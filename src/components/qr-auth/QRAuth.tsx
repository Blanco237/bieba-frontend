import React from "react";
import styles from "./qr.module.css";
import { useQRCode } from "next-qrcode";

interface QRProps {
    message: string;
    key: string;
}

const QRAuth: React.FC<QRProps> = ({message, key }) => {
  const { Canvas } = useQRCode();

  const qrText = `${key}:${message}`;

  return (
    <div className={styles.body}>
      <h5 className={styles.title}>
        Scan Code below with <span>Bieba Auth</span> app to authenticate.
      </h5>
      {
        qrText ? <Canvas
        options={{ scale: 8, color: { dark: "#4F46E5", light: "#ffffff" } }}
        text={qrText}
      /> : <></>
      }
    </div>
  );
};

export default QRAuth;
