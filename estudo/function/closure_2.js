function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increase to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());
