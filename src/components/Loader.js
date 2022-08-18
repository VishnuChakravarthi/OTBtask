import styles from "./Loader.module.css";

const Loader = () => {
  return (
    // taken from - https://codepen.io/aditisaraswat/pen/yLKQbVP
    <div className={styles.wrapper}>
      <span className={styles.dot}></span>
      <div className={styles.dots}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
