import styles from "./card.module.css";

type TCardProps = {
  image: string;
  name: string;
  email: string;
  openModal: Function;
};

const Card: React.FC<TCardProps> = ({ image, name, email, openModal }) => {
  return (
    <div className={styles.card} onClick={() => openModal()}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.about}>
        <p className={styles.text}>
          <span className={styles.title}>name: </span>
          <span className={styles.name}>{name}</span>
        </p>
        <p className={`${styles.text} ${styles.subtitle}`}>
          <span className={styles.title}>email: </span>
          <span className={styles.name}>{email}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
