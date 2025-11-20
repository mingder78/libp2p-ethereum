import pMap from 'p-map';
 async function fetchStats(url) {
      try {
        const response = await fetch(url);
        return response.status; // Returns the HTTP status code (e.g., 200, 404, 500)
      } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error as appropriate
      }
    }

const urls = [
	'https://sindresorhus.com',
	'https://avajs.dev',
	'https://github.com',
];

console.log(urls.length);
//=> 100

const mapper = url => fetchStats(url); //=> Promise

const result = await pMap(urls, mapper, {concurrency: 5});

console.log(result);
