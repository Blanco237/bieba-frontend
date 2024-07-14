import Button from "../../components/button/Button"
import LogoText from "../../icons/LogoText"
import ReactIcon from "../../icons/React"
import DigitalOceanIcon from "../../icons/DigitalOcean"
import FireshipIcon from "../../icons/Fireship"
import LaravelIcon from "../../icons/Laravel"
import NodeIcon from "../../icons/Node"
import SvelteIcon from "../../icons/Svelte"
import TailwindIcon from "../../icons/Tailwind"
import VueIcon from "../../icons/Vue"
import styles from './home.module.css'

const Home = () => {
  return (
    <main className={styles.body} >
      <div className={`${styles.circle} ${styles.circle1}`} />
      <div className={`${styles.circle} ${styles.circle2}`} />
      <div className={`${styles.bubble} top-[120px] left-[300px]`}>
        <ReactIcon />
      </div>
      <div className={`${styles.bubble} top-1/2 right-[100px]`}>
        <DigitalOceanIcon />
      </div>
      <div className={`${styles.bubble} left-1/2 top-[10%]`}>
        <FireshipIcon />
      </div>
      <div className={`${styles.bubble} bottom-[15%] left-[200px]`}>
        <LaravelIcon />
      </div>
      <div className={`${styles.bubble} top-[100px] right-[300px]`}>
        <NodeIcon />
      </div>
      <div className={`${styles.bubble} bottom-[5%] left-1/2`}>
        <SvelteIcon />
      </div>
      <div className={`${styles.bubble} top-1/2  left-[120px]`}>
        <TailwindIcon />
      </div>
      <div className={`${styles.bubble} bottom-[15%] right-[150px]`}>
        <VueIcon />
      </div>
      <div className={`${styles.bubble} size-12 rounded-lg bottom-1/2 right-[30%]`} />
      <div className={`${styles.bubble} size-12 rounded-lg bottom-[20%] right-1/2`} />
      <div className={`${styles.bubble} size-7 rounded-lg bottom-[75%] left-[30%]`} />
      <div className={`${styles.bubble} size-10 rounded-lg bottom-[50%] left-[20%]`} />
      <div className={`${styles.bubble} size-10 rounded-lg top-[5%] right-[20%]`} />
        <header className={styles.header}>
            <LogoText />
        </header>
        
        <section className={styles.content}>
          <h1 className={styles.title}>Secure Your Digital World with Bieba Auth</h1>
          <p className={styles.subtitle}>Effortless Authentication, Unmatched Security - Protect What Matters Most</p>
          <div className={styles.buttons}>
            <Button>Get Started</Button>
            <Button variant="outlined">See Docs</Button>
          </div>
        </section>
    </main>
  )
}

export default Home