import * as types from './../const/ActionTypes';
export const selectAll = (property) => {
    return {
        type : types.SELECT_PROPERTY,
        payload: property
    }
}