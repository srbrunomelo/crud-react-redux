import * as types from '../types';

export function createUser(values) {
    return {
        type : types.CREATE_USER,
        payload: {values}
    }
}

export function deleteUser(key) {
    return {
        type: types.DELETE_USER,
        payload: {key}
    }
}

export function handleStatus(key) {
    return {
        type: types.HANDLE_STATUS,
        payload: {key}
    }
}