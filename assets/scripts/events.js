
const submitCode = function (event) {
  event.preventDefault()
  const params = new URLSearchParams(location.search) // location.search
  const code = params.get('code')
  const room = params.get('state')
  console.log(code + ' code : room ' + room)
  call(code, room)
    .then((response) => console.log(response))
    .catch(error => console.log(error))
}
// 'https://intense-dawn-79586.herokuapp.com/carpools/addCodes'

const call = function (code, room) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://intense-dawn-79586.herokuapp.com/carpools/addCode',
    data: {
      code: code,
      roomID: room
    }
  })
}
module.exports = {
  submitCode
}
