import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/customHooks";
import { getCards } from "../../services/actions";
import Main from "../main/main";
import styles from "./app.module.css";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <Main />
    </div>
  );
};

export default App;
