const dates = ["2024-1-10", "2077-12-25", "1992-3-15", "1969-4-20"];

const dates_format = dates.map(formatDates);

function formatDates(elements) {
  const parts = elements.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function display(element){
    console.log(element)
}

dates_format.forEach(display);


