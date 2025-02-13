//Use set interval same as in 1-counter.md

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getTime() {
  const now = new Date();

  // For 24-hour format
  let hours24 = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format for 24-hour time
  hours24 = hours24 < 10 ? "0" + hours24 : hours24;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const time24 = `${hours24}:${minutes}:${seconds}`;

  // For 12-hour format
  let hours12 = now.getHours();
  const amOrPm = hours12 >= 12 ? "PM" : "AM";
  hours12 = hours12 % 12 || 12;
  hours12 = hours12 < 10 ? "0" + hours12 : hours12;
  const time12 = `${hours12}:${minutes}:${seconds} ${amOrPm}`;

  return { time24, time12 };
}

setInterval(() => {
  const { time24, time12 } = getTime();
  console.log("24-hour:", time24);
  console.log("12-hour:", time12);
}, 1000);
