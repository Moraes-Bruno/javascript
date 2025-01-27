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
      const trashOut = true;

      if (trashOut) {
        resolve("You take out the trash");
      } else {
        reject("you didnt take the trash out");
      }
    }, 1500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const kitchenResult = await cleanKitchen();
    console.log(kitchenResult);

    const trashResult = await takeOutTrash();
    console.log(trashResult);

    console.log("you finished all the chores");
  } catch (error) {
    console.error(error);
  }
}

doChores();
