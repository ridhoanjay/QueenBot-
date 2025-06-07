// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['+62882000457505'] //Own Number
global.developer = "Queen Bot" //Dev Name
global.botname = "Queen Bot" //Bot Name
global.version = "0.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "Queen Bot" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@QueenBot"
global.ttok = ""
global.igram = "https://instagram.com/@Queen Bot"
global.chtele = ""
global.tgram = "https://t.me/Queen Bot"
global.limitCount = 1,

//Bug Name Settings
global.bak = {
Ios: " QueenBot✰ ",
Andro: "QueenBot✰", 
Crash: " QueenBot✰ ̶",
Freeze: "QueenBot✰",
Ui: "QueenBot✰"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})