import { years as knownYears } from "./balanceSheets.js"

/**
 * Functions to access the hash part of the url (i.e. #2019 in the url https://example.com/#2019)
 */
let hash = {
  /**
   * Extract the selected year from the hash. If the hash can't be interpreted
   * as an int, null is returned. Otherwise, the year is returned as int.
   * 
   * Note that this doesn't check whether we actually have data on this year.
   * @return {int}
   */
  getYear: function () {
    // Remove leading # from window.location.hash
    return parseIntOrNull(window.location.hash.substring(1));
  },
  setYear: function (year) {
    window.location.replace("#"+year);
  },

  /**
   * Sets the event handler executed when the hash value changes
   * @param {function} handler 
   */
  onchange: function (handler) {
    window.onhashchange = handler;
  }
}

/**
 * Functions to access the dropdown on the UI
 */
let dropdown = {
  element: $("#year-switcher"),
  getYear: function () {
    return parseIntOrNull(this.element.dropdown('get value'));
  },
  setYear: function (year) {
    if(this.getYear() != year) {
      this.element.dropdown('set selected', year);
    }
  },
  initialize: function() {
    // Add one option for each year
    knownYears.forEach(year => {
      let option = $("<div>");
      option.text(year);
      option.addClass("item")
      $("#year-switcher-menu").append(option);
    });
    this.element.dropdown();
  },
  /**
   * Sets the event handler executed when the dropdown value changes
   * @param {function} handler 
   */
  onchange: function (handler) {
    this.element.dropdown('setting', 'onChange', handler);
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

/**
 * The currently selected year. Used by other components of this program
 * (accessed via setActiveYear and getActiveYear) to display the data for
 * the selected year.
 */
let activeYear = null;

/**
 * This function is notified whenever the active year changes.
 * It is notified only on actual changes, i.e.
 * setActiveYear(2018) will call the handler if and only if
 * 2018 wasn't the active year before.
 */
let activeYearChangeHandler = null;
  
export function setActiveYear(year) {
  // If we don't know this year, use the last one in the list
  // (should be the latest year we have data on, because we asked
  // the user to specify the data in an ordered way)
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

/**
 * Sets the handler for year changes
 */
export function onActiveYearChange(handler) {
  activeYearChangeHandler = handler;
}

export function getActiveYear() {
  return activeYear;
}
  
export function initialize() {
  dropdown.initialize();
  setActiveYear(hash.getYear());
  dropdown.onchange(()=>{
    setActiveYear(dropdown.getYear());
  });
  hash.onchange(()=>{
    setActiveYear(hash.getYear());
  });
}
