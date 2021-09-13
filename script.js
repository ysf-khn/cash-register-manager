'use strict';

const billAmt = document.querySelector('.bill-input');
const cashAmt = document.querySelector('.cash-input');
const checkNotes = document.querySelector('.check-notes');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const currencies = [2000, 500, 100, 20, 10, 5, 1];
// let bill,cash;

const minimumNotes = function (bill, cash) {
  let change = cash - bill;

  for (let i = 0; i < currencies.length; i++) {
    // console.log(i);
    const notes = Math.trunc(change / currencies[i]);
    change %= currencies[i];
    console.log(currencies[i], notes);
    noOfNotes[i].innerHTML = notes;
  }
};

minimumNotes(243, 2000);
