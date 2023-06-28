import { useEffect, useState } from "react";
import { ActionTypes } from "../store/action-types/action-types";
import { useAppDispatch, useAppSelector } from "../hooks/useDispatch";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 50rem;
  width: 95vw;
  margin: 0 auto;
  background: var(--white-color);
  border-radius: 0.5em;
  padding: 0.5em 2em;
  .form-content hr {
    color: #f0f2f5;
  }
  .form-content {
    margin-top: 1em;
  }
  .form {
    display: grid;
    margin-top: 1em;
  }

  h2 {
    margin: 0;
  }
  .form_range_content {
    display: flex;
    align-items: center;
    gap: 2em;
    margin-top: 1em;
  }
  .password-length {
    border: 1px solid #c8c8c8;
    padding: 0.5em 1.75em;
    border-radius: 0.25em;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .range-input {
    width: 70%;
  }
  .inputs {
    margin-top: 1em;
  }
  .input-container {
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5em;
  }
  .input-container input {
    height: 22px;
    width: 22px;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 700px) {
    .form {
      grid-template-columns: 2fr 1.4fr 1fr;
      gap: 1em;
    }
    .form_range_container {
      grid-column: 1/2;
    }
    .inputs {
      grid-column: 3/4;
      align-self: start;
    }
    .input-container input {
      height: 30px;
      width: 30px;
    }
  }
`;

const FormComponent = () => {
  const dispatch = useAppDispatch();
  const [passLength, setPassLength] = useState("1");
  const { isSymbol, isNumber, isLowercase, isUppercase, passwordLength } =
    useAppSelector((store) => store.password);

  useEffect(() => {
    dispatch({ type: ActionTypes.UPDATE_CHARACTERS });
    setPassLength(passwordLength);
    dispatch({ type: ActionTypes.GENERATE_PASSWORD });
  }, [isSymbol, isNumber, isLowercase, isUppercase, passwordLength]);

  const onChangePasswordState = (e: any) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "isUppercase") {
      value = e.target.checked;
    }
    if (name === "isLowercase") {
      value = e.target.checked;
    }
    if (name === "isNumber") {
      value = e.target.checked;
    }
    if (name === "isSymbol") {
      value = e.target.checked;
    }
    if (name === "passwordLength") {
      value = Number(e.target.value);
    }
    dispatch({
      type: ActionTypes.UPDATE_PASSWORD_FILTERS,
      payload: { name, value },
    });
  };

  return (
    <Wrapper className="form_container">
      <div className="form-content">
        <h2>Personalize your password.</h2>
        <hr />
        <form className="form">
          <div className="form_range_container">
            <label>Number of characters in the password.</label>
            <div className="form_range_content">
              <div className="password-length">{passLength}</div>
              <input
                className="range-input"
                type="range"
                min="1"
                max="30"
                value={passLength}
                name="passwordLength"
                onChange={onChangePasswordState}
              />
            </div>
          </div>
          <div className="inputs">
            <div className="input-container">
              <input
                className="input-checkbox"
                type="checkbox"
                name="isUppercase"
                checked={isUppercase}
                onChange={onChangePasswordState}
              />
              <label htmlFor="">Uppercase Letters</label>
            </div>
            <div className="input-container">
              <input
                className="input-checkbox"
                type="checkbox"
                name="isLowercase"
                onChange={onChangePasswordState}
              />
              <label htmlFor="">Lowercase Letters</label>
            </div>
            <div className="input-container">
              <input
                className="input-checkbox"
                type="checkbox"
                name="isNumber"
                onChange={onChangePasswordState}
              />
              <label htmlFor="">Numbers</label>
            </div>
            <div className="input-container">
              <input
                className="input-checkbox"
                type="checkbox"
                name="isSymbol"
                onChange={onChangePasswordState}
              />
              <label htmlFor="">Symbols</label>
            </div>
          </div>
        </form>
      </div>
      <div className="actions"></div>
    </Wrapper>
  );
};

export default FormComponent;
