import { produce } from 'immer';

let book = { title: 'Harry Potter' };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublish = true;
  });
}

let book2 = publish(book);

console.log(book);
console.log(book2);
