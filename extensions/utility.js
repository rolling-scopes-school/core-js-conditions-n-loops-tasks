/* eslint-disable prefer-template */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-eval */
function getRotateMatrix(arr) {
  return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9)=>{a 4=9;a 5=4.c;7 8;b(7 3=0;3<5/2;3+=1){b(7 6=0+3;6<5-1-3;6+=1){8=4[3][6];4[3][6]=4[5-6-1][3];4[5-6-1][3]=4[5-3-1][5-6-1];4[5-3-1][5-6-1]=4[6][5-3-1];4[6][5-3-1]=8}}d 4}',14,14,'|||j|matrix|sizeArray|i|let|temp|arr|const|for|length|return'.split('|'),0,{}))(arr);
}

function getBalanceIndex(arr) {
  return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(3)=>{b(3.7<=2){8-1}5 9=3[0];c(5 4=1;4<3.7;4+=1){5 a=0;c(5 6=4+1;6<3.7;6+=1){a+=3[6]}b(9===a){8 4}9+=3[4]}8-1}',13,13,'|||arr|i|let|j|length|return|leftSumm|rightSumm|if|for'.split('|'),0,{}))(arr);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArray(min, max, count) {
    const arr = [];
    for (let i = 0; i < count; i += 1) {
      arr.push(getRandomNumber(min, max));
    }
    return arr;
}

function getBalancedArray(length) {
  const minNumber = -10;
  const maxNumber = 10;
  let balanceIndex = getRandomNumber(2, length - 2)
  const arr = [];
  let summLeft = 0;
  for (let i = 0; i < balanceIndex; i += 1) {
    const number = getRandomNumber(minNumber, maxNumber);
    summLeft += number;
    arr.push(number);
  }
  arr.push(getRandomNumber(minNumber, maxNumber));
  for (let i = balanceIndex + 1; i < length - 1; i += 1) {
    const number = getRandomNumber(minNumber, maxNumber);
    summLeft -= number;
    arr.push(number);
  }
  arr.push(summLeft);
  balanceIndex = getBalanceIndex(arr);
  return {
    arr,
    balanceIndex,
  };
}

module.exports = {
  getRotateMatrix,
  getRandomArray,
  getBalancedArray,
};
