import io from 'socket.io-client'

// const socket = io('http://localhost:3005', {
// })

const socket = io('http://localhost:3005', {
  transportOptions: {
    polling: {
      extraHeaders: {
        authentication: 'blah'
      }
    }
  }
})

socket.on('exception', e => {
  console.log(e)
})

socket.on('connect', function() {
  console.log('connect')
})
socket.on('sync', function(data) {
  console.log('event', data)
})

socket.on('disconnect', function() {
  console.log('disconnect')
})
