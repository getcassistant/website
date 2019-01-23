import axios from "axios";

Array.from(document.getElementsByTagName('form')).forEach(form => {
  form.onsubmit = e => {
    e.preventDefault()
    let email = form.querySelector('input').value
    axios.post(form.action, { email })
        .then(response => {
          let success = form.parentElement.querySelector('.form-success')
          success.innerHTML = "You've been added to our list. We'll send you an email when we're ready!"

          success.setAttribute('data-success', true)
        })
        .catch(error => {
          let errors = form.parentElement.querySelector('.form-error')
          if (error.response.status == 422) {
            errors.innerHTML = error.response.data.errors.email[0]
          } else {
            errors.innerHTML = 'Server error. Please try again later or contact us.'
          }

          errors.setAttribute('data-error', true)
        })
  }
})
