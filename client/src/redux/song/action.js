import { toast } from "react-toastify";
import {
  uploadSongsData,
  likeSong,
  cancelLikeSong,
  removeSongData,
  editSongData,
  orderUserSongs,
  orderFavoritedSongs,
  orderPlaylistsSongs,
} from "../../api/api";
import {
  createSongs,
  deleteSongs,
  likeSongs,
  cancelLikeSongs,
} from "../../api/stats-api";
import { uploadImages, uploadSongs } from "../../services/cloudinary";
import {
  POST_SONG_REQUEST,
  POST_SONG_SUCCESS,
  POST_SONG_FAIL,
  GET_MY_SONGS_REQUEST,
  GET_MY_SONGS_SUCCESS,
  GET_MY_SONGS_FAIL,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
  LIKE_SONG_REQUEST,
  LIKE_SONG_SUCCESS,
  LIKE_SONG_FAIL,
  GET_MY_LIKED_SONGS_REQUEST,
  GET_MY_LIKED_SONGS_SUCCESS,
  GET_MY_LIKED_SONGS_FAIL,
  CANCEL_LIKED_SONG_REQUEST,
  CANCEL_LIKED_SONG_SUCCESS,
  CANCEL_LIKED_SONG_FAIL,
  ORDER_MY_SONGS_REQUEST,
  ORDER_MY_SONGS_SUCCESS,
  ORDER_MY_SONGS_FAIL,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from "./types";

export const uploadSongFile = (song, metadata, image) => async (dispatch) => {
  dispatch({ type: POST_SONG_REQUEST });
  try {
    const songData = await uploadSongs(song);
    let createdSong;
    if (image) {
      const songImage = await uploadImages(image);
      createdSong = await uploadSongsData(songData, metadata, songImage.url);
    } else {
      createdSong = await uploadSongsData(songData, metadata, undefined);
    }
    const { _id, owner, genre } = createdSong.data.data;
    const checkPrivate = createdSong.data.data.private;
    if (!checkPrivate) {
      const songStats = { _id, owner, genre };
      await createSongs(songStats);
    }
    toast.info("Successfully Uploaded");
    dispatch({ type: POST_SONG_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: POST_SONG_FAIL, payload: error.message });
  }
};

export const dispatchLikeSong = (songId, userId) => async (dispatch) => {
  dispatch({ type: LIKE_SONG_REQUEST });
  try {
    await likeSong(songId, userId);
    dispatch({ type: LIKE_SONG_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: LIKE_SONG_FAIL, payload: error.message });
  }
};

export const cancelLikedSongs = (songId, userId) => async (dispatch) => {
  dispatch({ type: CANCEL_LIKED_SONG_REQUEST });
  try {
    await cancelLikeSong(songId, userId);
    dispatch({ type: CANCEL_LIKED_SONG_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: CANCEL_LIKED_SONG_FAIL, payload: error.message });
  }
};

export const dispatchMySongsData = () => async (dispatch) => {
  dispatch({ type: GET_MY_SONGS_REQUEST });
  try {
    dispatch({ type: GET_MY_SONGS_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: GET_MY_SONGS_FAIL, payload: error.message });
  }
};

export const getMyLikedSongs = () => async (dispatch) => {
  dispatch({ type: GET_MY_LIKED_SONGS_REQUEST });
  try {
    dispatch({ type: GET_MY_LIKED_SONGS_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: GET_MY_LIKED_SONGS_FAIL, payload: error.message });
  }
};

export const deleteSong = (songId, userId) => async (dispatch) => {
  dispatch({ type: DELETE_SONG_REQUEST });
  try {
    await removeSongData(songId, userId);
    // Laravel function
    await deleteSongs(songId);
    toast.info("Successfully Deleted");
    dispatch({ type: DELETE_SONG_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: DELETE_SONG_FAIL, payload: error.message });
  }
};

export const editActualSong = (songId, songData, image) => async (dispatch) => {
  dispatch({ type: UPDATE_SONG_REQUEST });
  try {
    if (image) {
      const songImage = await uploadImages(image);
      await editSongData(songId, songData, songImage.url);
    } else {
      await editSongData(songId, songData, songData.initialImage);
    }
    toast.info("Successfully Edited");
    dispatch({ type: UPDATE_SONG_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: UPDATE_SONG_FAIL, payload: error.message });
  }
};

export const orderMySongs = (id, orderedList) => async (dispatch) => {
  dispatch({ type: ORDER_MY_SONGS_REQUEST });
  try {
    await orderUserSongs(id, orderedList);
    dispatch({ type: ORDER_MY_SONGS_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: ORDER_MY_SONGS_FAIL, payload: error.message });
  }
};

export const orderFavoriteSongs = (id, orderedList) => async (dispatch) => {
  dispatch({ type: ORDER_MY_SONGS_REQUEST });
  try {
    await orderFavoritedSongs(id, orderedList);
    dispatch({ type: ORDER_MY_SONGS_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: ORDER_MY_SONGS_FAIL, payload: error.message });
  }
};

export const orderMyPlaylistsSongs = (id, orderedList) => async (dispatch) => {
  dispatch({ type: ORDER_MY_SONGS_REQUEST });
  try {
    await orderPlaylistsSongs(id, orderedList);
    dispatch({ type: ORDER_MY_SONGS_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: ORDER_MY_SONGS_FAIL, payload: error.message });
  }
};
