let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
❉──────────❉
    *Mℛ ᭄KINGツ*
❉──────────❉

╔════════════════════
║*INFO*
╠════════════════════
║├≽️⚜ *AUTOR* : _TANPA NAMA_
║├≽️⚜ *DESIGNER* : _TANPA NAMA_
║├≽️⚜ *OWNER* : _TANPA NAMA_
╠════════════════════
║  *Mℛ ᭄KINGツ*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _Tidak Tersedia_
║│2. *YouTube <subscribe>*
║│https://youtube.com/channel/UCHK9gIokua2zkYKYTbqAwMQ
║│3. *Instagram <Follow>*
║│ _Tidak Tersedia_
║│4. *Creator Mℛ ᭄B O O Tツ*
║│ _Tanpa Nama_
║╰───────────
╠════════════════════
║ _*MADE BY Mℛ ᭄KINGツ*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
║>Request? Wa.me/+1 (831) 353-5216
║
╚════════════════════`
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

