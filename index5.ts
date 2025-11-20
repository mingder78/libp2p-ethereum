import pAll from 'p-all';
import got from 'got';

const actions = [
	() => got('https://sindresorhus.com'),
	() => got('https://avajs.dev'),
];

console.log(await pAll(actions, {concurrency: 2}));
