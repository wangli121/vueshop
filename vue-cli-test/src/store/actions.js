import * as types from './types'

export default {
    showHead: ({ commit, state }, payload) => {
        commit(types.SHOW_HEAD)
    },
    hideHead: ({ commit, state }, payload) => {
        commit(types.HIDE_HEAD)
    },
    showFoot: ({ commit, state }, payload) => {
        commit(types.SHOW_FOOT)
    },
    hideFoot: ({ commit, state }, payload) => {
        commit(types.HIDE_FOOT)
    },
}