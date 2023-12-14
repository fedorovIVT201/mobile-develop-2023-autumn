const initialState = {
  user: null,
  accessToken: null,
  /*refreshToken: null,*/
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Обработка успешного входа и сохранение токенов
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.token,
        /*refreshToken: action.payload.refreshToken,*/
      };
    default:
      return state;
  }
};

export default authReducer;
