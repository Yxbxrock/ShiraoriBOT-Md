let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('adiisus', '/api/randomimage/milf'), 'milf.jpg', '_*random milf*_', m)
}
handler.help = ['milf']
handler.tags = ['internet']
handler.command = /^(milf)$/i
handler.limit = true
module.exports = handler
