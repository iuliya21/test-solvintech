import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/customHooks";
import Card from "../card/card";
import styles from "./main.module.css";
import { v4 as uuidv4 } from "uuid";
import { RootState, TCard } from "../../services/types/types";
import { createSelector } from "reselect";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import PersonDetails from "../details-person/details-person";
import { deleteDetailsPerson, getDetailsPerson } from "../../services/actions";

const Main = () => {
  const dispatch = useAppDispatch();

  const { isModalOpen, openModal, closeModal } = useModal();

  const [visibleCount, setVisibleCount] = useState(4);

  const selectData = (store: RootState) => store.cards.data;

  const allData = createSelector([selectData], (data) => data);
  const allCards = useAppSelector(allData);

  const selectVisibleCards = createSelector([selectData], (data) =>
    data.slice(0, visibleCount)
  );
  const cards = useAppSelector(selectVisibleCards);

  const handleClick = () => {
    setVisibleCount((prevState) => {
      return prevState + 4;
    });
  };

  const showModal = (card: TCard) => {
    dispatch(getDetailsPerson(card));
    openModal();
  };

  const hideModal = () => {
    dispatch(deleteDetailsPerson());
    closeModal();
  };

  return (
    <main className={styles.main}>
      <ul className={styles.listCards}>
        {cards.map((card: TCard) => {
          const uuid = uuidv4();
          return (
            <li className={styles.listElement} key={uuid}>
              <Card
                image={card.picture}
                name={card.name}
                email={card.email}
                openModal={() => showModal(card)}
              />
            </li>
          );
        })}
      </ul>
      {visibleCount >= allCards.length ? null : (
        <button className={styles.button} onClick={handleClick}>
          Load more...
        </button>
      )}

      {isModalOpen && (
        <Modal onClosePopup={hideModal}>
          <PersonDetails />
        </Modal>
      )}
    </main>
  );
};

export default Main;
