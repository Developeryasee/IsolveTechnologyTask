import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import getSlices  from '../reducer/getData';



  const rootReducer = combineReducers(
    { 
        data:getSlices
    
    }
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
    let persistor = persistStore(store)
  return { store, persistor }
}
 export default configureStore;
