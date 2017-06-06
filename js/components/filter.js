'use strict';

const Filter = (update) => {
  const container = $("<div class='input-container'></div>");
  const input = $("<input id='inputFilter' type='text' placeholder='Ingresa el distrito a buscar'></input>");
  const searchIcon = $("<span class='a fa-search  search-icon' aria-hidden='true'></span>");

  container.append(input);
  input.append(searchIcon);

  return container;
}
