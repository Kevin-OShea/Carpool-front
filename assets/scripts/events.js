
const submitCode = function (event) {
  event.preventDefault()
  const params = new URLSearchParams(location.search) // location.search
  const code = params.get('code')
  const room = params.get('state')
  console.log(code + ' ' + room)
  call(code, room)
    .then(() => console.log('worked'))
    .catch(error => console.log(error))
}

const call = function (code, room) {
  return $.ajax({
    method: 'GET',
    url: 'https://intense-dawn-79586.herokuapp.com/carpools/'
  })
}
module.exports = {
  submitCode
}
