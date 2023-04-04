import server from './server'

const PORT = process.env.PORT || 3000

const path = require('path')
const dotenv = require('dotenv')

const envPath = path.join(__dirname, '../.env')
dotenv.config({ path: envPath })

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
  console.log(process.env.IMDB_KEY)
})
