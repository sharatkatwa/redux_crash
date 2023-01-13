import { BUG_ADD, BUG_REMOVED, BUG_RESOLVED } from './actionTypes.js';

export function bugAdded(description) {
  return {
    type: BUG_ADD,
    payload: {
      description,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id,
    },
  };
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
    },
  };
}
