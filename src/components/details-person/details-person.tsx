import { useAppSelector } from "../../hooks/customHooks";
import styles from "./details-person.module.css";

const PersonDetails = () => {
  const selectedCard = useAppSelector(
    (store) => store.infoPerson.selectedPerson.data
  );

  return (
    <div>
      <img
        src={selectedCard?.picture}
        alt={selectedCard?.name}
        className={styles.image}
      />
      <div className={styles.description}>
        <p className={styles.text}>
          <span className={styles.title}>name: </span>
          <span>{selectedCard?.name}</span>
        </p>
        <p className={styles.text}>
          <span className={styles.title}>age: </span>
          <span>{selectedCard?.age}</span>
        </p>
        <p className={styles.text}>
          <span className={styles.title}>email: </span>
          <span className={styles.email}>{selectedCard?.email}</span>
        </p>
        <p className={styles.text}>
          <span className={styles.title}>phone: </span>
          <span>{selectedCard?.phone}</span>
        </p>
        <p className={styles.text}>
          <span className={styles.title}>about: </span>
          <span>{selectedCard?.about}</span>
        </p>
      </div>
    </div>
  );
};

export default PersonDetails;
