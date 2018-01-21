import * as types from './types'

export default {
    [types.SHOW_HEAD]: (state) => {
        state.bHead = true;
    },
    [types.HIDE_HEAD]: (state) => {
        state.bHead = false;
    },
    [types.SHOW_FOOT]: (state) => {
        state.bFoot = true;
    },
    [types.HIDE_FOOT]: (state) => {
        state.bFoot = false;
    }
}