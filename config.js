const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'BagasGanz',
}

// Other
global.owner = ['201507384088']
global.premium = ['201507384088']
global.ownername = 'Gaara Setyawan'
global.botname = '𝗙𝗶𝗻𝗱𝗶𝗯𝗼𝘁 ⁵̄⁴͍⁵ ̵〆'
global.packname = '𝗙𝗶𝗻𝗱𝗶𝗯𝗼𝘁 ⁵̄⁴͍⁵ ̵〆'
global.gc = 'https://tinyurl.com/22phnfwc'
global.limitawal = '100'
global.author = '@gaaraxploite'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: '*DONE NGAB..*',
    admin: '*Lu Admin?*',
    botAdmin: '*Botnya Admin Dulu Lah Bjirr',
    owner: '_*Lu Bukan Owner Gua_*',
    group: '_*Mikir dikit anj!!,ini bukan group*_',
    private: '*Chat pribadi!!*',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*Wait Semdang DiProses*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/IMG-20220605-WA0030.jpg')
global.allmenu = fs.readFileSync('./media/IMG-20220605-WA0033.jpg')
global.thumb = fs.readFileSync('./media/IMG-20220604-WA0033.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
