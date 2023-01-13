import { store } from './store.js';
import * as createAction from './actionCreator.js';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(createAction.bugAdded('Bug1'));

store.dispatch(createAction.bugResolved(1));

// unsubscribe();

store.dispatch(createAction.bugRemoved(1));
console.log(store.getState());
