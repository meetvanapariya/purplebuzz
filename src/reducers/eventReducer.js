import { createSlice } from "@reduxjs/toolkit";

import activeServiceState  from '../data/initialState';



export const eventSlice = createSlice(
    {
        name : 'events',
        initialState : activeServiceState,
        reducers : {
            setActiveService : (state , action) =>{
                const newService = action.payload;
                state[0] = newService;
            },
            setActiveWorkService : (state , action) => {
                const newService = action.payload;
                state[1] = newService;
            }
        }
    }
);

export const { setActiveService } = eventSlice.actions;

export const { setActiveWorkService } = eventSlice.actions;

export const getActiveService = state =>state.events[0];

export const getActiveWorkService = state => state.events[1];

export default eventSlice.reducer;