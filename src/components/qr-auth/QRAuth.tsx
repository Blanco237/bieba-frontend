import React from "react";
import styles from "./qr.module.css";
import { useQRCode } from "next-qrcode";
import usePusher from "../../lib/hooks/usePusher";

interface QRProps {
  message: string;
  apikey: string;
  onSuccess: (code: string) => void
}

const QRAuth: React.FC<QRProps> = ({ message, apikey, onSuccess }) => {
  const { Canvas } = useQRCode();

  const qrText = `${apikey}:${message}`;

  console.log('text ', qrText);

  usePusher({
    channel: apikey,
    event: message,
    listener: (data: any) => {
      const code = data.code;
      onSuccess(code);
    },
  });

  return (
    <div className={styles.body}>
      <h5 className={styles.title}>
        Scan Code below with <span>Bieba Auth</span> app to authenticate.
      </h5>
      {qrText ? (
        <Canvas
          options={{ scale: 8, color: { dark: "#4F46E5", light: "#ffffff" } }}
          text={qrText}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default QRAuth;
