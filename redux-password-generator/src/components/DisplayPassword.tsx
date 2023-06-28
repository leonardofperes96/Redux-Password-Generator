import React from "react";
import styled from "styled-components";
import StrengthBar from "./StrengthBar";
import { useEffect, useState } from "react";
import { ActionTypes } from "../store/action-types/action-types";
import { useAppDispatch, useAppSelector } from "../hooks/useDispatch";
import { FaCopy, FaRedo } from "react-icons/fa";
const Wrapper = styled.div`
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 2em;
  .title {
    text-align: center;
    margin: 0.75em auto;
    color: var(--black-color);
    font-weight: 700;
    max-width: 25ch;
    line-height: 1.2;
  }
  .password-container {
    max-width: 50rem;
    margin: 0 auto;
    background: var(--white-color);
    border-radius: 0.5em;
  }

  .password-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em;
  }

  .password-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75em;
  }

  .icon-button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    font-size: 1.5rem;
    color: var(--light-gray);
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1rem;
    }
  }
`;
type SetPasswordProps = {
  setError: React.Dispatch<React.SetStateAction<string>>;
};
const DisplayPassword = ({ setError }: SetPasswordProps) => {
  const { password, passwordLength } = useAppSelector(
    (store) => store.password
  );
  const dispatch = useAppDispatch();
  const [passStrength, setPassStrength] = useState("0%");

  const [passColor, setPassColor] = useState("#fff");

  const handleGenerate = () => {
    dispatch({ type: ActionTypes.GENERATE_PASSWORD });
  };
  const handleModal = () => {
    if (password.length === 0) {
      setError("Please, generate a correct password.");
      return;
    }
    dispatch({ type: ActionTypes.SHOW_MODAL });

    navigator.clipboard.writeText(password);
    setError("");
  };

  useEffect(() => {
    if (passwordLength > 0){
      setPassStrength("0%")
      setPassColor('#fff')
    }
    if (passwordLength > 3) {
      setPassStrength("25%");
      setPassColor("#df6661");
    }
    if (passwordLength > 6) {
      setPassStrength("50%");
      setPassColor("#efc20f");
    }
    if (passwordLength > 8) {
      setPassStrength("75%");
      setPassColor("#00a878");
    }
    if (passwordLength > 10) {
      setPassStrength("100%");
      setPassColor("#006b4d");
    }
  }, [passwordLength]);

  return (
    <Wrapper className="password">
      <h2 className="title">
        Generate an instantly random and secure password
      </h2>
      <div className="password-container">
        <div className="password-actions">
          <h3>{password ? password : ""}</h3>
          <div className="password-icon">
            <button onClick={handleModal} className="icon-button">
              {" "}
              <FaCopy className="icon" />
            </button>
            <button onClick={handleGenerate} className="icon-button">
              {" "}
              <FaRedo className="icon" />
            </button>
          </div>
        </div>
        <StrengthBar passStrength={passStrength} passColor={passColor} />
      </div>
    </Wrapper>
  );
};

export default DisplayPassword;
