import { years as knownYears } from "./balanceSheets.js"

let hash = {
  /**
   * Extract the selected year from the hash. If the hash can't be interpreted
   * as an int, null is returned. Otherwise, the year is returned as int.
   * 
   * Note that this doesn't check whether we actually have data on this year.
   * 
   * @return {int}
   */
  getYear: function () {
    // Remove leading # from window.location.hash
    return parseIntOrNull(window.location.hash.substring(1));
  },

  /**
   * Set the year in the hash
   * @param {int} year
   */
  setYear: function (year) {
    window.location.hash = year;
  },

  /**
   * Sets the event handler executed when the hash value changes
   * @param {function} handler 
   */
  onchange: function (handler) {
    window.onhashchange = handler;
  }
}

let dropdown = {
  element: $(".year-switcher"),
  getYear: function () {
    return parseIntOrNull(this.element.val());
  },
  setYear: function (year) {
    this.element.val(year);
  },
  initializeYearList: function() {
    // Add one option for each year
    knownYears.forEach(year => {
      let option = $("<option>");
      option.text(year);
      this.element.append(option);
    });
  },
  /**
   * Sets the event handler executed when the dropdown value changes
   * @param {function} handler 
   */
  onchange: function (handler) {
    this.element.on("change", handler);
  }
}

/**
 * Utility function: Parses the given string as int, return the parsed int or null
 * when it couldn't be parsed
 * @param {string} str 
 */
function parseIntOrNull(str) {
  let parsed = parseInt(str);
  if (isNaN(parsed)) {
    return null;
  } else {
    return parsed;
  }
}

let activeYear = null;
let activeYearChangeHandler = null;
  
export function setActiveYear(year) {
  if(!knownYears.includes(year)) {
    year = knownYears[knownYears.length-1];
  }
  let yearChanged = activeYear != year;

  activeYear = year;
  dropdown.setYear(year);
  hash.setYear(year);

  if(yearChanged) {
    activeYearChangeHandler(year);
  }
}

export function onActiveYearChange(handler) {
  activeYearChangeHandler = handler;
}

export function getActiveYear() {
  return activeYear;
}
  
export function initialize() {
  dropdown.initializeYearList();
  setActiveYear(hash.getYear());
  dropdown.onchange(()=>{
    setActiveYear(dropdown.getYear());
  });
  hash.onchange(()=>{
    setActiveYear(hash.getYear());
  });
}
