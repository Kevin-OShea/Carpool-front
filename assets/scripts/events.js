
const submitCode = function (event) {
  event.preventDefault()
  const params = new URLSearchParams(location.search) // location.search
  const code = params.get('code')
  const room = params.get('state')
  console.log(code + ' ' + room)
  // http://localhost:4741/carpools/addCode
  // https://kevin-oshea.github.io/Carpool-Front/carpools/addCode
  // data: {
  //   code: code,
  //   roomID: room
  // }
  api(code, room)
    .then(() => console.log('worked'))
    .catch(error => console.log(error))
}

const api = function (code, room) {
  return $.ajax({
    method: 'GET',
    url: 'https://intense-dawn-79586.herokuapp.com/carpools/'
  })
}
module.exports = {
  submitCode
}
