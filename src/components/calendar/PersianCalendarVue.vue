<template>
  <!--           :class="{ 'current-day': isCurrentDay(day) }"
          @click="handleDayClick(day)" -->

  <!--     :class="{
            'current-day': cellData.isCurrentDay,
            'extera-dates': cellData.isExtraDate,
          }" -->
  <div class="persian-calendar">
    <div class="persian-calendar__calendar-header">
      <h3>{{ months[currnetMonth - 1] }} {{ currentYear }}</h3>
      <div class="persian-calendar__next-prev">
        <button class="persian-calendar__prev-btn" @click="setPreviousMonth">
          <img src="@/assets/images/icons/arrow-right.svg" alt="" />
        </button>
        <button class="persian-calendar__next-btn" @click="setNextMonth">
          <img src="@/assets/images/icons/arrow-left.svg" alt="" />
        </button>
      </div>
    </div>
    <table class="persian-calendar__table">
      <tr>
        <th
          v-for="day in dayNames"
          :key="day"
          class="persian-calendar__weekday-names"
        >
          {{ day }}
        </th>
      </tr>
      <tr v-for="week in totalRowArray" class="persian-calendar__row">
        <td v-for="day in 7" class="persian-calendar__data">
          {{ day }}
        </td>
      </tr>
    </table>
    <img
      id="calendarArrow"
      class="persian-calendar__arrow"
      src="@/assets/images/icons/arrow-left1.svg"
      alt=""
      @click="toggleCalendarRows"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
let currnetMonth = ref();
let currentYear = ref();
let checkCurrentMonth = ref(false);
// first day and last day of month
let firstDay = ref();
let lastDay = ref();
const months = [
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
const dayNames = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
const sizeOfMonths = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
let totalRow = ref(5);
let totalRowArray = ref();
totalRowArray = computed(() => {
  return Array.from({ length: totalRow.value }, (_, index) => index + 1);
});



function initializeCalendar() {
  createCalendar();
}

function getPersianToday() {
  let options = { year: "numeric", month: "long", day: "numeric" };
  const oldDate = new Date();
  let today = oldDate.toLocaleDateString("fa-IR", options);
  const dayNumber = oldDate.getDay();
  const dayOfWeek = dayNames[dayNumber];
  const day = today.split(" ")[0];
  const month = today.split(" ")[1];
  const year = today.split(" ")[2];
  const monthNumber = months.indexOf(month) + 1;
  let date = {};
  date.day = Number(persianToEnglishNumber(day));
  date.month = month;
  date.year = Number(persianToEnglishNumber(year));
  date.dayOfWeek = dayOfWeek;
  date.monthNumber = monthNumber;
  return date;
}
// set current month and year
function setCurrentdates() {
  currnetMonth.value = getPersianToday().monthNumber;
  currentYear.value = getPersianToday().year;
}
// create array days of month
function createDaysOfMonth(monthNumber) {
  let days = [];
  if (monthNumber <= 6) {
    createDays(31, days);
    return days;
  } else if (monthNumber <= 11) {
    createDays(30, days);
    return days;
  } else if (monthNumber == 12 && isLeapYear(currnetYear)) {
    createDays(30, days);
    return days;
  } else if (monthNumber == 12 && !isLeapYear(currnetYear)) {
    createDays(29, days);
    return days;
  }
}
function setNextMonth() {
  if (currnetMonth.value == 12) {
    currnetMonth.value = 0;
    currnetYear.value++;
  }
  createDaysOfMonth(++currnetMonth.value);
  if (lastDay.value >= 6) {
    lastDay.value = -1;
  }
  const dateObject = {
    day: 1,
    dayOfWeek: dayNames[lastDay.value + 1],
    monthNumber: currnetMonth.value,
  };
  firstDay.value = lastDay.value + 1;
  lastDay.value = getLastDayOfMonth(dateObject, currnetYear.value)[0];
  createCalendar();
}

function setPreviousMonth() {
  if (currnetMonth.value == 1) {
    currnetMonth.value = 13;
    currnetYear.value--;
  }
  createDaysOfMonth(--currnetMonth.value);
  if (firstDay.value <= 0) {
    firstDay.value = 7;
  }
  let dateObject;
  if (currnetMonth.value < 1) {
    if (isLeapYear(currnetYear.value - 1)) {
      dateObject = {
        day: 30,
        dayOfWeek: dayNames[firstDay.value - 1],
        monthNumber: currnetMonth.value,
      };
    } else {
      dateObject = {
        day: 29,
        dayOfWeek: dayNames[firstDay.value - 1],
        monthNumber: currnetMonth.value,
      };
    }
  } else {
    dateObject = {
      day: sizeOfMonths[currnetMonth.value - 1],
      dayOfWeek: dayNames[firstDay.value - 1],
      monthNumber: currnetMonth.value,
    };
  }
  lastDay.value = firstDay.value - 1;
  firstDay.value = getFirstDayOfMonth(dateObject)[0];
  createCalendar();
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

initializeCalendar();
// onMounted(() => {

  // craete calendar
  function createCalendar() {
    const today = getPersianToday().day;
    const daysOfMonth = createDaysOfMonth(currnetMonth.value);
    console.log(daysOfMonth);
    // set first day and last day in current month
    if (!checkCurrentMonth.value) {
      firstDay.value = getFirstDayOfMonth(getPersianToday())[0] + 1;
      lastDay.value =
        getLastDayOfMonth(getPersianToday(), currentYear.value)[0] + 1;
      checkCurrentMonth.value = true;
    }
    const daysInWeek = 7;
    let currentDay = 1;
    if (firstDay.value >= 5 && (lastDay.value == 0 || lastDay.value == 1)) {
      totalRow.value = 6;
    }
    // set next and prev month days
    const prevMonth = currnetMonth.value === 1 ? 12 : currnetMonth.value - 1;
    const prevMonthDays = createDaysOfMonth(prevMonth);
    const nextMonth = currnetMonth.value === 12 ? 1 : currnetMonth.value + 1;
    const nextMonthDays = createDaysOfMonth(nextMonth);
    // create clanedar with nested loop
    for (let week = 0; week < totalRow.value; week++) {
      const row = document.createElement("tr");
      row.classList.add("persian-calendar__row");
      for (
        let dayOfWeekIndex = 0;
        dayOfWeekIndex < daysInWeek;
        dayOfWeekIndex++
      ) {
        // const cell = document.createElement("td");
        // cell.classList.add("persian-calendar__data");
        // set empty cells in the first of month
        // if (week === 0 && dayOfWeekIndex < firstDay.value) {
        //   const prevMonthDay =
        //     prevMonthDays[
        //       prevMonthDays.length - (firstDay.value - dayOfWeekIndex)
        //     ];
        //   cell.textContent = persianToEnglishNumber(prevMonthDay);
        //   cell.style.color = "gray";
        //   cell.classList.add("extera-dates");
        // }
        // set cells in current month
        // else if (currentDay <= daysOfMonth.length) {
        //   cell.textContent = persianToEnglishNumber(
        //     daysOfMonth[currentDay - 1]
        //   );
        //   if (cell.textContent == today) {
        //     cell.classList.add("current-day");
        //     currentRow = week;
        //   }
        //   const cellIdentifier = `${currentYear.value}-${currnetMonth.value}-${cell.textContent.value}`;
        //   cell.setAttribute("data-date", cellIdentifier);
        //   currentDay++;
        // }
        // set cells in the last of month
      //   else if (currentDay > daysOfMonth.length && currentDay) {
      //     const nextMonthDay =
      //       nextMonthDays[currentDay - daysOfMonth.length - 1];
      //     cell.textContent = persianToEnglishNumber(nextMonthDay);
      //     cell.style.color = "gray";
      //     cell.classList.add("extera-dates");
      //     currentDay++;
      //   } else {
      //     cell.textContent = "";
      //   }
      //   row.classList.add("active-calendar");
      //   row.appendChild(cell);
      }
      // calendar.appendChild(row);
    }
    //   calendar.rows[currentRow].classList.remove("active-calendar");
    //   calendar.rows[currentRow].classList.add("inactive-calendar");
  }
  function addEvent(date) {
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

  setCurrentdates();
  const nextButton = document.getElementById("next-btn");
  const currentDateElement = document.getElementById("current-date");
  //   nextButton.addEventListener("click", () => {
  //     setNextMonth();
  //     updateCurrentDate();
  //   });

  //   const prevButton = document.getElementById("prev-btn");
  //   prevButton.addEventListener("click", () => {
  //     setPreviousMonth();
  //     updateCurrentDate();
  //   });

  //   document.addEventListener("click", (event) => {
  //     const clickedCell = event.target;
  //     if (clickedCell.tagName === "TD" && clickedCell.textContent !== "") {
  //       clearHighlightedDates();
  //       clickedCell.classList.add("clicked-day");
  //       const clickedDay = clickedCell.textContent;
  //       const clickedMonth = currnetMonth;
  //       const clickedYear = currnetYear;
  //       const dateClicked = `${clickedYear}-${clickedMonth}-${clickedDay}`;
  //       console.log(dateClicked);
  //     }
  //   });

  // function clearHighlightedDates() {
  //   const highlightedCells = document.querySelectorAll(".clicked-day");
  //   highlightedCells.forEach((cell) => {
  //     cell.classList.remove("clicked-day");
  //   });
  // }

  function updateCurrentDate() {
    // const currentMonth = currnetMonth.value;
    // const currentYear = currentYear.value;
    // currentDateElement.textContent = `${
    //   months[currentMonth - 1]
    // } ${persianToEnglishNumber(currentYear)}`;

    addEvent("1402-6-8");

    addEvent("1402-7-21");
  }

  createCalendar();
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
  // calendarArrow.addEventListener("click", showAndHideRows);

</script>
