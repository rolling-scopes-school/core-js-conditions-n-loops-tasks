/* eslint-disable prefer-template */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-eval */
function getRotateMatrixUtil(arr) {
  return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(9)=>{a 4=9;a 5=4.c;7 8;b(7 3=0;3<5/2;3+=1){b(7 6=0+3;6<5-1-3;6+=1){8=4[3][6];4[3][6]=4[5-6-1][3];4[5-6-1][3]=4[5-3-1][5-6-1];4[5-3-1][5-6-1]=4[6][5-3-1];4[6][5-3-1]=8}}d 4}',14,14,'|||j|matrix|sizeArray|i|let|temp|arr|const|for|length|return'.split('|'),0,{}))(arr);
}

function getBalanceIndexUtil(arr) {
  return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(3)=>{b(3.7<=2){8-1}5 9=3[0];c(5 4=1;4<3.7;4+=1){5 a=0;c(5 6=4+1;6<3.7;6+=1){a+=3[6]}b(9===a){8 4}9+=3[4]}8-1}',13,13,'|||arr|i|let|j|length|return|leftSumm|rightSumm|if|for'.split('|'),0,{}))(arr);
}

function getSpiralMatrixUtil(size) {
  return eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4)=>{d 6=[];a(7 3=0;3<4;3+=1){6[3]=[]}7 5=1;7 8=0;7 9=0;e(5<4*4){a(7 3=0+9;3<4-9;3+=1){6[8][3]=5;5+=1}a(7 3=1+8;3<4-8-1;3+=1){6[3][4-9-1]=5;5+=1}a(7 3=4-1-9;3>=0+9;3-=1){6[4-8-1][3]=5;5+=1}a(7 3=4-2-8;3>=1+8;3-=1){6[3][0+9]=5;5+=1}8+=1;9+=1}f(4%2!==0){6[b.c(4/2)][b.c(4/2)]=5}g 6}',17,17,'|||i|size|number|result|let|line|column|for|Math|floor|const|while|if|return'.split('|'),0,{}))(size);
}

function getRandomNumberUtil(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayUtil(min, max, count) {
    const arr = [];
    for (let i = 0; i < count; i += 1) {
      arr.push(getRandomNumberUtil(min, max));
    }
    return arr;
}

function getBalancedArrayUtil(length) {
  const minNumber = -10;
  const maxNumber = 10;
  let balanceIndex = getRandomNumberUtil(2, length - 2)
  const arr = [];
  let summLeft = 0;
  for (let i = 0; i < balanceIndex; i += 1) {
    const number = getRandomNumberUtil(minNumber, maxNumber);
    summLeft += number;
    arr.push(number);
  }
  arr.push(getRandomNumberUtil(minNumber, maxNumber));
  for (let i = balanceIndex + 1; i < length - 1; i += 1) {
    const number = getRandomNumberUtil(minNumber, maxNumber);
    summLeft -= number;
    arr.push(number);
  }
  arr.push(summLeft);
  balanceIndex = getBalanceIndexUtil(arr);
  return {
    arr,
    balanceIndex,
  };
}

module.exports = {
  getRotateMatrixUtil,
  getRandomArrayUtil,
  getBalancedArrayUtil,
  getSpiralMatrixUtil,
  getRandomNumberUtil,
};
