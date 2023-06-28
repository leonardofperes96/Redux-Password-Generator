import { ActionTypes } from "../action-types/action-types";

interface UpdateCharacters {
  type: ActionTypes.UPDATE_CHARACTERS;
}

interface UpdatePasswordFilters {
  type: ActionTypes.UPDATE_PASSWORD_FILTERS;
  payload: {
    name: string;
    value: string | boolean;
  };
}
interface GeneratePassword {
  type: ActionTypes.GENERATE_PASSWORD;
}
interface ShowModal {
  type: ActionTypes.SHOW_MODAL;
}

interface CloseModal {
  type: ActionTypes.CLOSE_MODAL;
}

export type Actions =
  | UpdateCharacters
  | UpdatePasswordFilters
  | GeneratePassword
  | ShowModal
  | CloseModal;
