const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const helpers = require('handlebars-helpers')
const multihelpers = helpers();
const app = express()
const port = 3000

app.use(express.static('public'))
//setting body-parser
app.use(bodyParser.urlencoded({extended : true}))

app.engine('handlebars', exphbs({defaultLayut: 'main', helpers: multihelpers}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTrashTalk(option)
  const object = option.flexRadioDefault
  res.render('index', {object, trashTalk})
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})