import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers/movieReducer'; // Assurez-vous que votre réducteur principal est correctement importé

// Définissez le type de l'état de votre store
type RootState = ReturnType<typeof rootReducer>;

// Créez le store avec le middleware thunk
const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>)
);

export default store;


