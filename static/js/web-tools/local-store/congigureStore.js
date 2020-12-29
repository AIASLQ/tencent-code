import { createStore } from 'redux';
import { persistStore, persistReducer } from '../store/node_modules/redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import storageSession from 'redux-persist/lib/storage/session';
import { storeKey } from './../user-center/config';

import rootReducer from './reducers';

const persistConfig = {
    key: storeKey,
    // storage: storageSession,
    storage: storage,
    // blacklist: ['userInfos'] // 'userInfos' will not be persisted
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const localStore = createStore(persistedReducer)
const localPersistor = persistStore(localStore)

export default () => {
    return { localStore, localPersistor }
}