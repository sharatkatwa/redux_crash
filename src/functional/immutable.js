import { Map } from 'immutable';

let book = Map({ title: 'Harry Potter' });

function publish(book) {
  return book.set('isPublish', true);
}

const result = publish(book);

console.log(result.toJS());
