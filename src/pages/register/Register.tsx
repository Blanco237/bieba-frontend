import styles from "./register.module.css";
import ReactIcon from "../../icons/React";
import DigitalOceanIcon from "../../icons/DigitalOcean";
import FireshipIcon from "../../icons/Fireship";
import SvelteIcon from "../../icons/Svelte";
import TailwindIcon from "../../icons/Tailwind";
import UserPlusIcon from "../../icons/UserPlus";
import LogoMarkIcon from "../../icons/LogoMark";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    callback: "",
  });

  return (
    <main className={styles.body}>
      <section className={styles.left}>
        <LogoMarkIcon />
        <div className="flex flex-col items-start gap-2">
          <h3 className={styles.title}>Register Organization</h3>
          <p className={styles.subtitle}>
            Innovate, Integrate, and Inspire. Unlock powerful authentication
            solutions with our robust APIs and comprehensive documentation.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Input
            label="Organization Name"
            value={formData.name}
            onChange={(val) => setFormData({ ...formData, name: val })}
            placeholder="Organization"
          />
          <Input
            label="Email"
            value={formData.email}
            onChange={(val) => setFormData({ ...formData, email: val })}
            placeholder="example@example.com"
          />
          <Input
            label="Callback URL"
            value={formData.callback}
            onChange={(val) => setFormData({ ...formData, callback: val })}
            placeholder="https://example.com/authcallback"
          />
          <p className={`${styles.subtitle} !text-xs`}>
            Users will be redirected here after successful authentication.
          </p>
        </div>
        <Button fullWidth>Submit</Button>
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

export default Register;
