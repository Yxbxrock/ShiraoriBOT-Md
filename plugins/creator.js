const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;frmndaa;;;'
                    + 'FN:frmndaa\n' // full name
                    + 'ORG:Ilman;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282365089294:+62 823-6508-9294\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'frmndaa', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
