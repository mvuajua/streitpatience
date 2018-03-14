import {
  SET_ONLINE_PLAYERS,
  CREATE_NEW_GAME,
  RECONNECT_PLAYER,
  ADD_PLAYER
} from './action-types';

export function setOnlinePlayers(onlinePlayers) {
  return { type: SET_ONLINE_PLAYERS, payload: onlinePlayers };
}

export function createNewGame(gameId, playerId, username) {
  return { type: CREATE_NEW_GAME, payload: { gameId, playerId, username } };
}

export function reconnectPlayer(gameId, playerId, newPlayerId) {
  return { type: RECONNECT_PLAYER, payload: { gameId, playerId, newPlayerId } };
}

export function addPlayer(gameId, playerId, username) {
  return { type: ADD_PLAYER, payload: { gameId, playerId, username } };
}
