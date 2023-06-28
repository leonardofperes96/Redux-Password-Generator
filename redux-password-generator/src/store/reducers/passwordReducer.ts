import { ActionTypes } from "../action-types/action-types";
import { Actions } from "../actions/actions";

export interface GeneratePasswordTypes {
  isUppercase: boolean;
  isLowercase: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  passwordLength: number;
  characters: string;
  password: string;
  show: boolean;
}

const initialState: GeneratePasswordTypes = {
  isUppercase: true,
  isLowercase: false,
  isNumber: false,
  isSymbol: false,
  passwordLength: 1,
  characters: "",
  password: "",
  show: false,
};

const passwordReducer = (
  state = initialState,
  action: Actions
): GeneratePasswordTypes => {
  switch (action.type) {
    case ActionTypes.UPDATE_CHARACTERS: {
      const { isUppercase, isLowercase, isNumber, isSymbol } = state;
      let tempCharacters = "";

      if (isUppercase) {
        tempCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      if (isLowercase) {
        tempCharacters += "abcdefghijklmnopqrstuvwxyz";
      }

      if (isNumber) {
        tempCharacters += "0123456789";
      }

      if (isSymbol) {
        tempCharacters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
      }

      return { ...state, characters: tempCharacters };
    }
    case ActionTypes.UPDATE_PASSWORD_FILTERS: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    case ActionTypes.GENERATE_PASSWORD: {
      const { passwordLength, characters } = state;
      let tempPassword = "";
      const charactersLength = characters.length;
      let counter = 0;

      while (counter < passwordLength) {
        tempPassword += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }

      return { ...state, password: tempPassword };
    }
    case ActionTypes.SHOW_MODAL: {
      return { ...state, show: true };
    }
    case ActionTypes.CLOSE_MODAL: {
      return { ...state, show: false };
    }
    default:
      return state;
  }
};

export default passwordReducer;
