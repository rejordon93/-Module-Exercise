const helpers = (items, idToRemove) => {
  const choice = Math.floor(Math.random() * items.length);
  const randomItem = items[choice];

  const updatedItems = items.filter((item) => item.id !== idToRemove);

  if (updatedItems.length === items.length) {
    return undefined; // Item with the specified id was not found
  }

  // Do something with the randomItem and updatedItems arrays.
  return randomItem;
};

export default helpers;
