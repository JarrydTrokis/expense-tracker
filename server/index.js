import http from 'http'
import app from '../app'

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3000

/**
 * Create HTTP server.
 */
const server = http.createServer(app)
let availablePort = port
/**
 * Listen on provided port, on all network interfaces.
 */
const startServer = (serverPort) => {
  server.listen(serverPort)
}
/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = `${
    typeof port === 'string' ? 'Pipe' : 'Port'
  } ${port}`
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.log(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      if (availablePort - port < 10) {
        availablePort += 1
        startServer(availablePort)
      } else {
        console.log(`${bind} is already in use`)
        process.exit(1)
      }
      break
    default:
      throw error
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address()
  const bind = `${
    typeof addr === 'string' ? 'pipe' : 'port'
  } ${
    typeof addr === 'string' ? addr : addr.port
  }`
  console.log(`Server is listening on ${bind}`)
  console.log(`Visit: http://localhost:${addr.port}`)
}
/**
 * Start server.
 */
server.on('error', onError)
server.on('listening', onListening)
startServer(availablePort)
