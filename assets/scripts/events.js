
const submitCode = function (event) {
  event.preventDefault()
  const params = new URLSearchParams(location.search) // location.search
  const code = params.get('code')
  const room = params.get('state')
  console.log(code + ' ' + room)
  api(code, room)
    .then(() => console.log('worked'))
    .catch(error => console.log(error))
}

// http://localhost:4741/carpools/addCode
// https://kevin-oshea.github.io/Carpool-Front/carpools/addCode
const api = function (code, room) {
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/carpools/addCode',
    data: {
      code: code,
      roomID: room
    }
  })
}
module.exports = {
  submitCode
}
