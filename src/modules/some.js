import Vuex from "vuex";

const state = {
    some: 'test'
}

const store = new Vuex.Store({
    state,
    getters: {
        // eslint-disable-next-line no-unused-vars
        someGetter: (state) => {
            return state.some;
        }
    },
    actions: {
        someAction(context, payload) {
            context.commit('someMutation', payload);
        }
    },
    mutations: {
        someMutation(state, payload) {
            state.some = payload;
        }
    },
});

export default store;