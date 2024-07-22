import React from "react";
import styles from "./qr.module.css";
import usePusher from "../../lib/hooks/usePusher";
import QRCode from "react-qr-code";

interface QRProps {
  message: string;
  apikey: string;
  onSuccess: (code: string) => void
}

const QRAuth: React.FC<QRProps> = ({ message, apikey, onSuccess }) => {

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
        <QRCode
          value={qrText}
          size={256}
          level="L"
          bgColor="#ffffff"
          fgColor="#4F46E5"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default QRAuth;
