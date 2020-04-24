function callData() {
  console.log('calling api');
}

function debounce(fn, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

let myInput = document.querySelector('input');
myInput.addEventListener('keyup', debounce(callData, 1000));
