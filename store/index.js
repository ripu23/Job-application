import { createStore, compose, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';

import reducers from '../reducers';

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['likedJobs']
};

const reducer = persistCombineReducers(config, reducers);

export default function configurationStore(initialState = {}) {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk),
    );
    const persistor = persistStore(store);
    return { persistor, store };
}