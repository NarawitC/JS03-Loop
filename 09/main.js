let firstNUmber = prompt('Enter the number 1-99');
let go = true;
let guestTimes = 0;
while (go) {
  let secondNUmber = prompt('Guest the number');
  firstNUmber = Number(firstNUmber);
  secondNUmber = Number(secondNUmber);
  if (secondNUmber === firstNUmber) {
    go = false;
  } else if (secondNUmber > firstNUmber) {
    alert('Too High');
  } else if (secondNUmber < firstNUmber) {
    alert('Too Low');
  }
  guestTimes += 1;
}
alert(`Correct\nGuest Times : ${guestTimes}`);
