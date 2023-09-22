class PersianCalendar {
  currnetMonth;
  currnetYear;
  checkCurrentMonth = false;
  // first day and last day of month
  firstDay;
  lastDay;
  constructor() {
    this.currnetMonth = null;
    this.currnetYear = null;
  }
  static months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  static dayNames = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
  static sizeOfMonths = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  getPersianToday() {
    let options = { year: "numeric", month: "long", day: "numeric" };
    const oldDate = new Date();
    let today = oldDate.toLocaleDateString("fa-IR", options);
    const dayNumber = oldDate.getDay();
    const dayOfWeek = PersianCalendar.dayNames[dayNumber];
    const day = today.split(" ")[0];
    const month = today.split(" ")[1];
    const year = today.split(" ")[2];
    const monthNumber = PersianCalendar.months.indexOf(month) + 1;
    let date = {};
    date.day = Number(persianToEnglishNumber(day));
    date.month = month;
    date.year = Number(persianToEnglishNumber(year));
    date.dayOfWeek = dayOfWeek;
    date.monthNumber = monthNumber;
    return date;
  }
  // set current month and year
  setCurrentdates() {
    this.currnetMonth = this.getPersianToday().monthNumber;
    this.currnetYear = this.getPersianToday().year;
  }
  // create array days of month
  createDaysOfMonth(monthNumber) {
    let days = [];
    if (monthNumber <= 6) {
      createDays(31, days);
      return days;
    } else if (monthNumber <= 11) {
      createDays(30, days);
      return days;
    } else if (monthNumber == 12 && isLeapYear(this.currnetYear)) {
      createDays(30, days);
      return days;
    } else if (monthNumber == 12 && !isLeapYear(this.currnetYear)) {
      createDays(29, days);
      return days;
    }
  }
  setNextMonth() {
    if (this.currnetMonth == 12) {
      this.currnetMonth = 0;
      this.currnetYear++;
    }
    persianCalendar.createDaysOfMonth(++this.currnetMonth);
    if (this.lastDay >= 6) {
      this.lastDay = -1;
    }
    const dateObject = {
      day: 1,
      dayOfWeek: PersianCalendar.dayNames[this.lastDay + 1],
      monthNumber: this.currnetMonth,
    };
    this.firstDay = this.lastDay + 1;
    this.lastDay = getLastDayOfMonth(dateObject, this.currnetYear)[0];
    this.createCalendar();
  }

  setPreviousMonth() {
    if (this.currnetMonth == 1) {
      this.currnetMonth = 13;
      this.currnetYear--;
    }
    persianCalendar.createDaysOfMonth(--this.currnetMonth);
    if (this.firstDay <= 0) {
      this.firstDay = 7;
    }
    let dateObject;
    if (this.currnetMonth < 1) {
      if (isLeapYear(this.currnetYear - 1)) {
        dateObject = {
          day: 30,
          dayOfWeek: PersianCalendar.dayNames[this.firstDay - 1],
          monthNumber: this.currnetMonth,
        };
      } else {
        dateObject = {
          day: 29,
          dayOfWeek: PersianCalendar.dayNames[this.firstDay - 1],
          monthNumber: this.currnetMonth,
        };
      }
    } else {
      dateObject = {
        day: PersianCalendar.sizeOfMonths[this.currnetMonth - 1],
        dayOfWeek: PersianCalendar.dayNames[this.firstDay - 1],
        monthNumber: this.currnetMonth,
      };
    }
    this.lastDay = this.firstDay - 1;
    this.firstDay = getFirstDayOfMonth(dateObject)[0];
    this.createCalendar();
  }
  // craete calendar
  createCalendar() {
    const today = this.getPersianToday().day;
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    const daysOfMonth = this.createDaysOfMonth(this.currnetMonth);
    // set first day and last day in current month
    if (!this.checkCurrentMonth) {
      this.firstDay = getFirstDayOfMonth(this.getPersianToday())[0] + 1;
      this.lastDay =
        getLastDayOfMonth(this.getPersianToday(), this.currnetYear)[0] + 1;
      this.checkCurrentMonth = true;
    }
    const daysInWeek = 7;
    let currentDay = 1;
    let totalRow = 5;
    if (this.firstDay >= 5 && (this.lastDay == 0 || this.lastDay == 1)) {
      totalRow = 6;
    }
    // set next and prev month days
    const prevMonth = this.currnetMonth === 1 ? 12 : this.currnetMonth - 1;
    const prevMonthDays = this.createDaysOfMonth(prevMonth);
    const nextMonth = this.currnetMonth === 12 ? 1 : this.currnetMonth + 1;
    const nextMonthDays = this.createDaysOfMonth(nextMonth);
    // create clanedar with nested loop
    for (let week = 0; week < totalRow; week++) {
      const row = document.createElement("tr");
      row.classList.add("persian-calendar__row");
      for (
        let dayOfWeekIndex = 0;
        dayOfWeekIndex < daysInWeek;
        dayOfWeekIndex++
      ) {
        const cell = document.createElement("td");
        cell.classList.add("persian-calendar__data");
        // set empty cells in the first of month
        if (week === 0 && dayOfWeekIndex < this.firstDay) {
          const prevMonthDay =
            prevMonthDays[
              prevMonthDays.length - (this.firstDay - dayOfWeekIndex)
            ];
          cell.textContent = persianToEnglishNumber(prevMonthDay);
          cell.style.color = "gray";
          cell.classList.add("extera-dates");
        }
        // set cells in current month
        else if (currentDay <= daysOfMonth.length) {
          cell.textContent = persianToEnglishNumber(
            daysOfMonth[currentDay - 1]
          );
          if (cell.textContent == today) {
            cell.classList.add("current-day");
            currentRow = week;
          }
          const cellIdentifier = `${this.currnetYear}-${this.currnetMonth}-${cell.textContent}`;
          cell.setAttribute("data-date", cellIdentifier);
          currentDay++;
        }
        // set cells in the last of month
        else if (currentDay > daysOfMonth.length && currentDay) {
          const nextMonthDay =
            nextMonthDays[currentDay - daysOfMonth.length - 1];
          cell.textContent = persianToEnglishNumber(nextMonthDay);
          cell.style.color = "gray";
          cell.classList.add("extera-dates");
          currentDay++;
        } else {
          cell.textContent = "";
        }
        row.classList.add("active-calendar");
        row.appendChild(cell);
      }
      calendar.appendChild(row);
    }
    calendar.rows[currentRow].classList.remove("active-calendar");
    calendar.rows[currentRow].classList.add("inactive-calendar");
  }
  addEvent(date) {
    const targetCell = document.querySelector(
      `.persian-calendar__data[data-date="${date}"]`
    );

    if (targetCell) {
      const eventNumber = document.createElement("span");
      eventNumber.classList.add("event-number");
      eventNumber.textContent = "1";
      targetCell.appendChild(eventNumber);
      eventNumber.classList.add("persian-calendar__event-date");
    }
  }
}

const persianCalendar = new PersianCalendar();
persianCalendar.setCurrentdates();
const nextButton = document.getElementById("next-btn");
const currentDateElement = document.getElementById("current-date");
nextButton.addEventListener("click", () => {
  persianCalendar.setNextMonth();
  updateCurrentDate();
});

const prevButton = document.getElementById("prev-btn");
prevButton.addEventListener("click", () => {
  persianCalendar.setPreviousMonth();
  updateCurrentDate();
});

document.addEventListener("click", (event) => {
  const clickedCell = event.target;
  if (clickedCell.tagName === "TD" && clickedCell.textContent !== "") {
    clearHighlightedDates();
    clickedCell.classList.add("clicked-day");
    const clickedDay = clickedCell.textContent;
    const clickedMonth = persianCalendar.currnetMonth;
    const clickedYear = persianCalendar.currnetYear;
    const dateClicked = `${clickedYear}-${clickedMonth}-${clickedDay}`;
    console.log(dateClicked);
  }
});

function clearHighlightedDates() {
  const highlightedCells = document.querySelectorAll(".clicked-day");
  highlightedCells.forEach((cell) => {
    cell.classList.remove("clicked-day");
  });
}

function createDays(maxNumber, days) {
  for (let i = 1; i <= maxNumber; i++) {
    days.push(i);
  }
  return days;
}

function isLeapYear(year) {
  if (year >= 1343 && year <= 1472) {
    const mod = year % 33;
    const specialNumber = [1, 5, 9, 13, 17, 22, 26, 30];
    if (specialNumber.find((element) => element == mod)) {
      return true;
    } else {
      return false;
    }
  }
  if (year >= 1244 && year <= 1342) {
    const mod = year % 33;
    const specialNumber = [1, 5, 9, 13, 17, 21, 26, 30];
    if (specialNumber.find((element) => element == mod)) {
      return true;
    } else {
      return false;
    }
  } else return false;
}

function persianToEnglishNumber(persianNumber) {
  persianNumber = persianNumber.toString();
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < persianDigits.length; i++) {
    persianNumber = persianNumber.replace(
      new RegExp(persianDigits[i], "g"),
      englishDigits[i]
    );
  }

  return persianNumber;
}

function getFirstDayOfMonth(date) {
  const dayNames = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
  if (date.day === 1) {
    return [dayNames.indexOf(date.dayOfWeek), date.dayOfWeek];
  } else {
    let counter = date.day - 1;
    let index = dayNames.indexOf(date.dayOfWeek);
    while (counter > 0) {
      index--;
      if (index < 0) {
        index = 6;
      }
      counter--;
    }
    return [index, dayNames[index]];
  }
}

function getLastDayOfMonth(date, year) {
  let sizeOfMonths = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  const dayNames = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
  if (isLeapYear(year)) {
    sizeOfMonths.pop();
    sizeOfMonths.push(30);
  }
  if (date.day === sizeOfMonths[date.monthNumber - 1]) {
    return [dayNames.indexOf(date.dayOfWeek), date.dayOfWeek];
  } else {
    let counter = date.day;
    const days = sizeOfMonths[date.monthNumber - 1];
    let index = dayNames.indexOf(date.dayOfWeek);
    while (counter < days) {
      index++;
      if (index > 6) {
        index = 0;
      }
      counter++;
    }
    return [index, dayNames[index]];
  }
}

function updateCurrentDate() {
  const currentMonth = persianCalendar.currnetMonth;
  const currentYear = persianCalendar.currnetYear;
  currentDateElement.textContent = `${
    PersianCalendar.months[currentMonth - 1]
  } ${persianToEnglishNumber(currentYear)}`;

  persianCalendar.addEvent("1402-6-8");

  persianCalendar.addEvent("1402-7-21");
}

persianCalendar.createCalendar();
updateCurrentDate();

let rotationAngle = 270;
var currentRow;
let activeCalendar = false;
const calendarArrow = document.getElementById("calendarArrow");
const calendar = document.getElementById("calendar");

const showAndHideRows = () => {
  rotationAngle += 180;
  calendarArrow.style.transform = "rotate(" + rotationAngle + "deg)";
  for (let i = 0; i < 6; i++) {
    if (
      calendar.rows[i].classList.contains("active-calendar") &&
      i != currentRow
    ) {
      calendar.rows[i].classList.remove("active-calendar");
      calendar.rows[i].classList.add("inactive-calendar");
    } else if (
      calendar.rows[i].classList.contains("inactive-calendar") &&
      i != currentRow
    ) {
      calendar.rows[i].classList.remove("inactive-calendar");
      calendar.rows[i].classList.add("active-calendar");
    }
  }
};

