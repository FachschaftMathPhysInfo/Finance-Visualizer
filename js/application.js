import * as yearSwitcher from "./yearSwitcher.js"
import * as tabs from "./tabs.js"
import * as balanceSheets from "./balanceSheets.js"
import * as display from "./display.js"

/**
 * Main "method". Executed exactly once after everything is loaded.
 */
function main() {
  tabs.initialize();
  display.initialize();

  // This loads the years from data/years.json and initialize
  // the year switcher mechanics (i.e. dropdown, window hash, change listeners)
  balanceSheets.loadYears()
    .then(() => yearSwitcher.initialize())
    .then(() => display.setHaushaltsplanLink(yearSwitcher.getActiveYear()));

  // This change listener plugs all components together:
  // When a new year is selected, the corresponding balance sheet is loaded
  // (this might or might not require fetching the data from the internet),
  // and the sheet is displayed
  yearSwitcher.onActiveYearChange(() => {
    display.setHaushaltsplanLink(yearSwitcher.getActiveYear());

    balanceSheets.get(yearSwitcher.getActiveYear())
      .then(sheet => display.show(sheet));
  });
}

// Execute main as soon as DOM is ready (see https://api.jquery.com/ready/)
$(main);
