import { createStore } from 'vuex';
import en from '../locales/en';
import zh from '../locales/zh';

export default createStore({
    state: {
        language: 'en',
        locales: {
            en,
            zh,
        },
    },
    mutations: {
        setLanguage(state, newLanguage) {
            state.language = newLanguage;
        },
    },
});
