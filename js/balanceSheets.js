/**
 * List of integers: The years we know about. This list is filled
 * by loadYears() once at the start of the application and is then
 * used to show a list of years the user can select from
 */
export let years = null;

/**
 * Caches balance sheets that were request from the backend, so you don't
 * have to request the balance sheet for one year more than once.
 * Once initialized, this object looks like this:
 * {
 *  "2019": {
 *    "einnahmen": [...],
 *    "ausgaben": [...]
 *  },
 *  "2018": {
 *     ...
 *  }
 * }
 */
const balanceSheets = {};

/**
 * Return the balance sheet for the given year. If we haven't loaded it yet,
 * load it.
 * 
 * More formally, this will return a promise that will be resolved with the
 * request balance sheet as parameter.
 * 
 * @param {int} year The year of which the balance sheet is returned
 */
export function get(year) {
  return new Promise((resolve, reject)=>{
    if(balanceSheets[year]) {
      // We already have the balance sheet cached, so we can resolve the Promise
      // right here, right now
      resolve(balanceSheets[year]);
    } else {
      // We don't have the balance sheet cached, so we first have to load and store
      // it and can then return it
      Promise.all([
        $.get("/data/"+year+"/ausgaben.json"),
        $.get("/data/"+year+"/einnahmen.json")
      ]).then(data=>{
        balanceSheets[year] = {
          ausgaben: data[0],
          einnahmen: data[1]
        };
        resolve(balanceSheets[year]);
      });
    }
  });
}

/**
 * Returns a promise to load the years from data/years.json.
 * The years are stored in the "years" variable after they are loaded.
 */
export function loadYears() {
  return new Promise(
    (resolve, reject)=>{
      $.get("/data/years.json", (yearList)=>{
        years = yearList;
        resolve();
      }); 
    }
  );
}