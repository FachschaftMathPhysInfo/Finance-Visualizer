import * as display from "./display.js"

/**
 * Finds all tabs and their corresponding menu items.
 * Adds an onclick listener to the menu items so you
 * can click them to change the active tab.
 */
export function initialize() {
  $(".top.menu .item").tab();

  let tabs = $(".tab");
  let containers = $(".con");
  let menuItems = $(".tabular .item");

  menuItems.on("click", function (event) {
    // The newly selected menu item is the target of this on click event
    let newlySelectedItem = $(event.currentTarget);
    // The item stores the name of the corresponding tab in the data-tab attribute,
    // so we can use it to determine both the tab and the chart container
    let newlySelectedTabName = newlySelectedItem.attr("data-tab");
    let newlySelectedTab = $("#" + newlySelectedTabName);
    let newlySelectedContainer = $("#" + newlySelectedTabName + "container");

    // First, remove the active class from all tabs and menu items
    // and hide all containers
    tabs.removeClass("active");
    menuItems.removeClass("active");
    containers.hide();

    // Then, add it back to only the selected tab and its menu item
    // and the corresponding chart container
    newlySelectedItem.addClass("active");
    newlySelectedTab.addClass("active");
    newlySelectedContainer.show();

    if (newlySelectedTabName == "einnahmen") {
      display.einnahmenChart.reflow();
    } else if (newlySelectedTabName == "ausgaben") {
      display.ausgabenChart.reflow();
    }
  });
}
