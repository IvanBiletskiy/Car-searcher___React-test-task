// Enum with all available action types. Usefull with IDE/code-editor autocomplete to avoid typographic mistakes and to see list of all actions that you have

const Actions = {
    CAR_INFO_REQUEST: "CAR_INFO_REQUEST",
    CAR_INFO_REQUEST_SUCCESS: "CAR_INFO_REQUEST_SUCCESS",
    CAR_INFO_REQUEST_FAILURE: "CAR_INFO_REQUEST_FAILURE",
    SET_CAR_NUMBER_INPUT_ERROR: "SET_CAR_NUMBER_INPUT_ERROR"
};
export default Object.freeze(Actions);
