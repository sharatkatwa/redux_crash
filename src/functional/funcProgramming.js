import { compose, pipe } from 'lodash/fp';

let input = '        this is a string need to trim and put into div         ';

const trim = (str) => str.trim();
const wrapInDiv = (type) => (str) => `<${type}>${str}</${type}>`;
const tolwrcse = (str) => str.toLowerCase();

// to solve the lot of paranthesis problem we use lodash
const output = tolwrcse(wrapInDiv(trim(input)));

// fix
// const output2 = compose(wrapInDiv, tolwrcse, trim);
const output2 = pipe(trim, wrapInDiv('div'), tolwrcse);
output2(input);
