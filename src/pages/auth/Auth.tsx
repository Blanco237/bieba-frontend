import styles from "./auth.module.css";
import ReactIcon from "../../icons/React";
import DigitalOceanIcon from "../../icons/DigitalOcean";
import FireshipIcon from "../../icons/Fireship";
import SvelteIcon from "../../icons/Svelte";
import TailwindIcon from "../../icons/Tailwind";
import LogoMarkIcon from "../../icons/LogoMark";
import { useEffect, useState } from "react";
import LockIcon from "../../icons/Lock";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import STORAGE_KEYS from "../../constants/storage";
import QRAuth from "../../components/qr-auth/QRAuth";
import OTPAuth from "../../components/otp-auth/OTPAuth";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [mode, setMode] = useState<'qr' | 'otp'>('qr');

  useEffect(() => {
    const verifyOrganization = async ()  => {
        try {
            const response = await API.post('/organization/verify', { key: localStorage.getItem(STORAGE_KEYS.API_KEY)})
            const { key, message, name } = response.data;
            setKey(key);
            setMessage(message);
            setName(name);
            setLoading(false);
        } catch (e) {
            alert("Invalid Organization")
            navigate('/')
        }
    }

    verifyOrganization();
  }, [])

  return (
    <main className={styles.body}>
      <section className={styles.left}>
        <LogoMarkIcon />
        {loading ? (
          <div className="">Loading...</div>
        ) : (
          <>
            <div className="flex flex-col items-start gap-2">
              <h3 className={styles.title}>Authenticate to {name}</h3>
            </div>
            <div className="flex items-center gap-4">
                <button className={`${styles.chip} ${mode === 'qr' ? styles.active : ''}`} onClick={() => setMode('qr')}>QR Code</button>
                <button className={`${styles.chip} ${mode === 'otp' ? styles.active : ''}`} onClick={() => setMode('otp')}>OTP</button>
            </div>
            {
                mode === 'qr' ? <QRAuth message={message} key={key} /> : <OTPAuth />
            }
          </>
        )}
      </section>
      <section className={styles.right}>
        <div className={`${styles.circle1} -top-12 -right-80 z-[-1]`} />
        <div className={`${styles.circle2} top-8 -right-60 z-[-1]`} />
        <div className={`${styles.circle3} top-[20%] -right-80 z-[-1]`} />
        <div className={`${styles.circle4} top-[50%] -right-60 z-[-1]`} />
        <div className={`${styles.bubble} top-[10%] left-[20%]`}>
          <ReactIcon />
        </div>
        <div className={`${styles.bubble} top-1/2 right-[100px]`}>
          <DigitalOceanIcon />
        </div>
        <div className={`${styles.bubble} right-[10%] top-[10%]`}>
          <FireshipIcon />
        </div>

        <div className={`${styles.bubble} bottom-[5%] left-1/2`}>
          <SvelteIcon />
        </div>
        <div className={`${styles.bubble} top-1/2  left-[120px]`}>
          <TailwindIcon />
        </div>
        <div
          className={`${styles.bubble} top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <LockIcon />
        </div>
        <div
          className={`${styles.bubble} size-12 rounded-lg bottom-1/2 right-[30%]`}
        />
        <div
          className={`${styles.bubble} size-12 rounded-lg bottom-[20%] right-1/2`}
        />
        <div
          className={`${styles.bubble} size-7 rounded-lg bottom-[75%] left-[30%]`}
        />
        <div
          className={`${styles.bubble} size-10 rounded-lg bottom-[50%] left-[20%]`}
        />
        <div
          className={`${styles.bubble} size-10 rounded-lg top-[5%] right-[20%]`}
        />
      </section>
    </main>
  );
};

export default Auth;
