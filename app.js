const express = require('express')
const app = express()

// Heroku dynamically sets a port
// Most of source code is for browser, so we don't want to add Node to Eslint env
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('green')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
