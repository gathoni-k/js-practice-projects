
window.onload =function() {
  const arrayColors = ['#ffcdb2','#ffb4a2', '#e5989b', '#b5838d', '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']

  // randomly toggle elements in array
  const randomElem = (arr) => {
    const idx = Math.floor(Math.random() * arr.length+1)
    return arr[idx]
  }
  
  function changeColor () {
    document.body.style.backgroundColor = randomElem(arrayColors)
  }
  
  document.addEventListener('click', changeColor)
}