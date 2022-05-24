const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*
Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├🏧 082365089294 (Telkomsel/Dana)
├
└────
Berapapun donasi kalian akan sangat berarti 👍
Arigatou!
Contact person Owner:
wa.me/6282365089294 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.postimg.cc/tRhcxyCD/IMG-20220524-210416.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'instagram',
               url: 'https://instagram.com/frmndaa.___?utm_medium=copy_link'
             }

             },
               {
             callButton: {
               displayText: 'Telkomsel',
               phoneNumber: '+62 823-6508-9294'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

                 }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
