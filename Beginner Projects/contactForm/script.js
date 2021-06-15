document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  // Get values
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const msg = document.getElementById('message').value
  // Store values in local storage
  window.localStorage.setItem('Name', name)
  window.localStorage.setItem('Email', email)
  window.localStorage.setItem('Message', msg)
  // Reset values
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('message').value = ''
})
