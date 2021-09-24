import {
  signInWithGoogle,
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "../../services/auth";
import { syncUserData } from "../../api/api";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGN_OUT_SUCCESS,
  SEND_PASSWORD_RESET_REQUEST,
  SEND_PASSWORD_RESET_SUCCESS,
  SEND_PASSWORD_RESET_FAIL,
} from "./types";

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await signInWithGoogle();
    const accessToken = res.credential.accessToken;
    const userProfile = {
      firstName: res.additionalUserInfo.profile.given_name,
      lastName: res.additionalUserInfo.profile.family_name,
      email: res.additionalUserInfo.profile.email,
      // picture: res.additionalUserInfo.profile.picture,
    };
    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: userProfile });
    await syncUserData(userProfile);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const registerWithEmailAndPassword =
  (email, password, user) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      await signUpWithEmailAndPassword(email, password);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: { ...user, email },
      });
      await syncUserData(user);
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
  };

export const loginWithEmailAndPassword =
  (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const res = await signInWithEmailAndPassword(email, password);

      const userProfile = {
        uid: res.user.uid,
        email: res.user.email,
      };
      const accessToken = res.user.multiFactor.user.accessToken;

      dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
      dispatch({ type: LOAD_PROFILE, payload: userProfile });
      await syncUserData();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };

export const logout = () => async (dispatch) => {
  await signOut();
  dispatch({ type: SIGN_OUT_SUCCESS });
};

export const sendPasswordResetEmailToUser = (email) => async (dispatch) => {
  dispatch({ type: SEND_PASSWORD_RESET_REQUEST });
  try {
    await sendPasswordResetEmail(email);
    dispatch({ type: SEND_PASSWORD_RESET_SUCCESS });
  } catch (error) {
    dispatch({
      type: SEND_PASSWORD_RESET_FAIL,
      payload: error.message,
    });
  }
};
