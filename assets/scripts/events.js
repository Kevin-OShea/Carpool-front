
const submitCode = function (event) {
  event.preventDefault()
  api('a', 'b')
    .then(response => console.log(response))
}

const api = function (code, roomId) {
  return $.ajax({
    method: 'GET',
    url: 'https://intense-dawn-79586.herokuapp.com/carpools/'
  })
}
module.exports = {
  submitCode
}
