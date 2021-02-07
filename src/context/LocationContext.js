import createDataContext from "./createDataContext";
import {randomColorGenerator} from "../Functions/ColorsGenerator";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'color_change':
            return {...state, colors: {color1: randomColorGenerator(), color2: randomColorGenerator()}};
        case 'reset':
            return {...state, name: '', locations: []};
        case 'change_name':
            return {...state, name: action.payload};
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]}
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        case 'add_current_location':
            return {...state, currentLocation: action.payload};
        default:
            return state;
    }
};

const changeColors = (dispatch) => () => {
    dispatch({type: 'color_change'});
};

const changeName = (dispatch) => (name) => {
    dispatch({type: 'change_name', payload: name});
};

const startRecording = (dispatch) => () => {
    dispatch({type: 'start_recording'});
};

const stopRecording = (dispatch) => () => {
    dispatch({type: 'stop_recording'});
};

const addLocation = (dispatch) => (location, recording) => {
    dispatch({type: 'add_current_location', payload: location});
    if (recording) {
        dispatch({type: 'add_location', payload: location});
    }
};

const reset = (dispatch) => () => {
    dispatch({type: 'reset'});
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {changeName, startRecording, stopRecording, addLocation, reset, changeColors},
    {
        name: '',
        recording: false,
        locations: [],
        currentLocation: null,
        colors: {color1: randomColorGenerator(), color2: randomColorGenerator()}
    }
);