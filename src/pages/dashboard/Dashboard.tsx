import styles from "./dashboard.module.css";
import ReactIcon from "../../icons/React";
import DigitalOceanIcon from "../../icons/DigitalOcean";
import FireshipIcon from "../../icons/Fireship";
import SvelteIcon from "../../icons/Svelte";
import TailwindIcon from "../../icons/Tailwind";
import LogoMarkIcon from "../../icons/LogoMark";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import API from "../../api";
import { useParams } from "react-router-dom";
import { Organization } from "../../types";
import NodeIcon from "../../icons/Node";
import VueIcon from "../../icons/Vue";

const Dashboard = () => {
  const { id } = useParams();
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [callback, setCallback] = useState('');
  const [updating, setUpdating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('Copy');

  const updateCallback = async () => {
    try {
      setUpdating(true);
      const response = await API.post('/organization/update-callback', { callback, id });
      const { callback_url } = response.data;
      setCallback(callback_url)
    } catch (e) {
      alert('Something went wrong. Please Try Again')
    } finally {
      setUpdating(false)
    }
  }

  useEffect(() => {
    const fetchOrganization = async () => {
      const response = await API.get(`/organization/${id}`);
      const org = response.data as Organization;
      setOrganization(org);
      setCallback(org.callback_url)
      setLoading(false)
    }

    fetchOrganization();
  }, [id])



  const copyKey = () => {
    navigator.clipboard.writeText(organization?.api_key!)
    .then(() => {
      setMessage('Copied');
      setTimeout(() => {
        setMessage('Copy')
      }, 3000)
    })
    .catch((error) => {
      console.error("Error copying text to clipboard: ", error);
    });
  }
  

  return (
    <main className={styles.body}>
      <section className={styles.left}>
        <LogoMarkIcon />
        {
          loading ? <>
          <div>Loading...</div>
          </> : <><div className="flex flex-col items-start gap-1">
          <h3 className={styles.title}>{organization?.name} Dashboard - <span className="text-primary text-4xl">{organization?.secrets_aggregate.aggregate.count} User(s)</span></h3>
          <p className={styles.subtitle}>
            {organization?.email}
          </p>
         <div className="flex gap-2">
          <h6 className="font-medium">Api Key:</h6>
          <span>{organization?.api_key?.replace(/./g, '*')}</span>
          <button className="bg-gray-300 px-3 py-[2px] rounded-md hover:bg-gray-400 text-sm font-medium transition-colors" onClick={copyKey}>{message}</button>
         </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Input
            label="Callback URL"
            value={callback}
            onChange={(val) => setCallback(val)}
            placeholder="https://example.com/authcallback"
          />
          <p className={`${styles.subtitle} !text-xs`}>
            Users will be redirected here after successful authentication.
          </p>
        </div>
        <Button
          disabled={!callback}
          loading={updating}
          fullWidth
          onClick={updateCallback}
        >
          Update
        </Button></>
        }
      </section>
      <section className={styles.right}>
        <div className={`${styles.circle1} -top-12 -right-80 z-[-1]`} />
        <div className={`${styles.circle2} top-8 -right-60 z-[-1]`} />
        <div className={`${styles.circle3} top-[20%] -right-80 z-[-1]`} />
        <div className={`${styles.circle4} top-[50%] -right-60 z-[-1]`} />
        <div className={`${styles.bubble} top-1/2 right-[100px]`}>
          <ReactIcon />
        </div>
        <div className={`${styles.bubble}  top-[25%] right-[25%]`}>
          <VueIcon />
        </div>
        <div className={`${styles.bubble}  top-[10%] left-[20%]`}>
          <DigitalOceanIcon />
        </div>
        <div className={`${styles.bubble} right-[10%] top-[10%]`}>
          <FireshipIcon />
        </div>

        <div className={`${styles.bubble} bottom-[5%] left-1/2`}>
          <SvelteIcon />
        </div>
        <div className={`${styles.bubble} top-[35%]  left-[30%]`}>
          <TailwindIcon />
        </div>
        <div className={`${styles.bubble} top-[75%]  left-[120px]`}>
          <NodeIcon />
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

export default Dashboard;
