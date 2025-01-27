//promise: Um objeto que gerencia operações assincronas.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the doggo");
      } else {
        reject("you didnt walk the doggo");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenClear = true;
      if (kitchenClear) {
        resolve("You clean the kitchen");
      } else {
        reject("you didnt clean the kitchen");
      }
    }, 1500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = false;

      if (trashOut) {
        resolve("You take out the trash");
      } else {
        reject("you didnt take the trash out");
      }
    }, 1500);
  });
}

walkDog().then((value) => {
  console.log(value);
  return cleanKitchen().then((value) => {
    console.log(value);
    takeOutTrash()
      .then((value) => console.log(value))
      .catch((error) => console.error(error));
  });
});
