const axios = require('axios')

axios
  .post('https://www.redpack.com.mx/rastreo-de-envios/', {
    todo: '082910016'
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
