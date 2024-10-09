function hello() {
  console.log("hello");
}

const timeOutId = setTimeout(hello, 1000);

clearTimeout(timeOutId)