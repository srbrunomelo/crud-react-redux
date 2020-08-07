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