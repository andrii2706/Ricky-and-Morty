import * as actinTypes from './actionTypes'

export const getAllCharacters = (payload)=>{
    return {type:actinTypes.GET_ALL_CHARACTERS,payload}
}
export const changePagination = (payload)=>{
    return {type:actinTypes.CHANGE_PAGINATION, payload}
}
