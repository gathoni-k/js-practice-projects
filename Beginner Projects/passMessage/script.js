// add submit event listener
document.getElementById('passMsg').addEventListener('submit', (e) => {
  // prevent page reload
  e.preventDefault()
  // get message
  const message = document.getElementById('sentMsg').value
  //  display message
  document.getElementById('deliveredMsg').innerHTML = message
  // reset
  document.getElementById('sentMsg').value = ''
})
