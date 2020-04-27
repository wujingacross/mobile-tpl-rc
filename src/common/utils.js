import querystring from 'querystring';

export function shuffle(array) {
  let counter = array.length;
  console.log('shuffle', array);

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function getTimeFormated(count, zh = false) {
  return zh
    ? `${String(Math.floor(count / 60))}分${String(count % 60)}秒`
    : `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`;
}

export const parseString = data => {
  if (data) {
    if (typeof data !== 'string') {
      return new Error('Expect input type to number');
    }
    return querystring.parse(data);
  } else {
    // eslint-disable-next-line no-restricted-globals
    const searchStr = location.search;
    if (searchStr) {
      return querystring.parse(searchStr.substr(1));
    }
  }
  return {};
};

export const getDateYearMonth = function(date = new Date(), yearJoiner = '-', monthJoiner = '') {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}${yearJoiner}${month < 10 ? '0' : ''}${month}${monthJoiner}`;
};
