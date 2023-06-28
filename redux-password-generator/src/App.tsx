import DisplayPassword from "./components/DisplayPassword";
import FormComponent from "./components/FormComponent";

import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./hooks/useDispatch";
import CopyModal from "./components/CopyModal";
import { ActionTypes } from "./store/action-types/action-types";
import { useState } from "react";

const App = () => {
  const { show, password } = useAppSelector((store) => store.password);
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const handleModal = () => {
    if (password.length === 0) {
      setError("Please, generate a correct password.");
      return;
    }
    dispatch({ type: ActionTypes.SHOW_MODAL });

    navigator.clipboard.writeText(password);
    setError("");
  };

  return (
    <>
      <Header />
      <DisplayPassword setError={setError}/>
      <FormComponent />
      {show && <CopyModal />}
      {error && <p className="error">{error}</p>}
      <button className="copy-btn" onClick={handleModal}>
        Copy
      </button>
    </>
  );
};

export default App;
