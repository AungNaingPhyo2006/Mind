import React from 'react';
const mmNum = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

export function convertMmDigit(number) {
  let strNum = String(number);
  let split = strNum.split('');
  let myan = '';
  for (let i = 0; i < split.length; i++) {
    const element = split[i];
    const realNum = +element;
    myan += mmNum[realNum];
  }
  // console.log('MMNum', myan);
  return myan;
}
