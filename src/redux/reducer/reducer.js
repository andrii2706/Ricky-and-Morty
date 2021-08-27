import * as actionTypes from '../actions/actionTypes'

const initialState = {
    characters:[],
    totalNumberOfPages:0,
    pageNext:1,
    pagePrev:0,
     // next: (),
     //    prev:( ),
    episodes:[],
    location:[],
    characterData:{},
    locationData:{},
    episodesData:{}
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case actionTypes.GET_ALL_CHARACTERS:
            return{
                ...state,
                characters: action.payload.results,
                totalNumberOfPages: action.payload.pages,
                pageNext: action.payload.next,
                pagePrev: action.payload.prev
                // next:action.payload.page,
                // prev: action.payload.page
            }
        case actionTypes.CHANGE_PAGINATION:
            return {
                ...state,
                pageNext: action.payload,
                pagePrev: action.payload
            }
    }
}
export {reducer}
