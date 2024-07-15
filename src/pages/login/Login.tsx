import styles from "./login.module.css";
import ReactIcon from "../../icons/React";
import DigitalOceanIcon from "../../icons/DigitalOcean";
import FireshipIcon from "../../icons/Fireship";
import SvelteIcon from "../../icons/Svelte";
import TailwindIcon from "../../icons/Tailwind";
import UserPlusIcon from "../../icons/UserPlus";
import LogoMarkIcon from "../../icons/LogoMark";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useMemo, useState } from "react";
import API from "../../api";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "../../components/otp-input/OtpInput";

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const disabled = useMemo(() => {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  const loginOrganization = async () => {
    const data = {
     email
    };

    try {
      setLoading(true);
      await API.post("/organization/login", data);
      setLoading(false);
      setOtpSent(true);
    } catch (e) {
      alert("Something Went Wrong. Please try Again");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    const data = {
      code: otp,
      email
     };
 
     try {
       setLoading(true);
       const response = await API.post("/organization/verify-otp", data);
       const { id } = response.data;
       navigate(`/dashboard/${id}`)
     } catch (e) {
       alert("Something Went Wrong. Please try Again");
     } finally {
       setLoading(false);
     }
  }

  return (
    <main className={styles.body}>
      <section className={styles.left}>
        <LogoMarkIcon />
        <div className="flex flex-col items-start gap-2">
          <h3 className={styles.title}>Login Organization</h3>
          <p className={styles.subtitle}>
            Don't Have An Account?{" "}
            <Link to="/register" className="text-primary font-medium">
              Please Register
            </Link>
          </p>
        </div>
        {otpSent ? (
          <>
            <OtpInput setOtp={setOtp} />
            <Button
              disabled={otp.length !== 6}
              loading={loading}
              fullWidth
              onClick={verifyOTP}
            >
              Verify
            </Button>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 w-full">
              <Input
                label="Email"
                value={email}
                onChange={(val) => setEmail(val)}
                placeholder="example@example.com"
              />
            </div>
            <Button
              disabled={disabled}
              loading={loading}
              fullWidth
              onClick={loginOrganization}
            >
              Submit
            </Button>
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
          <UserPlusIcon />
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

export default Login;
