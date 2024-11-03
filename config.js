const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040463391";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_17_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiazhXL2NscGJOemt0SHI2a3ZHeXBZemdVbTMzVXM0MGxLZG5ta3VrcnVscz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2sxbC04Y3pUOHVtaDJDQ1cyeXBpUVwiLFxuICBcInBob25lSWRcIjogXCJlNGNlZmIyZS02NmJhLTRjMTktOGY3MC1iZjk4NTdkYzc1ZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTEsXG4gICAgICAyMjAsXG4gICAgICAyMzAsXG4gICAgICAzOCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDQsXG4gICAgICAxOSxcbiAgICAgIDE0MyxcbiAgICAgIDEzMyxcbiAgICAgIDEwOCxcbiAgICAgIDE2MyxcbiAgICAgIDc3LFxuICAgICAgMTQwLFxuICAgICAgODUsXG4gICAgICAxMjYsXG4gICAgICAxNixcbiAgICAgIDExNSxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDEzOSxcbiAgICAgIDIyOCxcbiAgICAgIDI0OCxcbiAgICAgIDg3LFxuICAgICAgMTcwLFxuICAgICAgOTQsXG4gICAgICAzNixcbiAgICAgIDk0LFxuICAgICAgMTk5LFxuICAgICAgMTE0LFxuICAgICAgMzgsXG4gICAgICAyMCxcbiAgICAgIDEwOCxcbiAgICAgIDIwOCxcbiAgICAgIDEzNCxcbiAgICAgIDQwLFxuICAgICAgMjI5LFxuICAgICAgMzYsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkJSWEtBUTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA0NjMzOTE6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUWUcgw5fNnMOXIEdIT1NUP8K/WVTwk4O1XCIsXG4gICAgXCJsaWRcIjogXCIxMzQzNzI0OTc4MjE5MjU6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjNSbVIwUThleWZ1UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxNUV5THhnZFJ4M2U1M3NIVXg3aHdNbURPeG9qME9oWGsrcFZ3NVVOSERvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkF4RFk3akczRjVpWEd1amxRakxWODU2L3RwcXRCRjFuQ016QVRTU1BWazRwc2VaQnBKU3lDUi85a1NoZDBlT3o0RXc5RWF5OEgvaGtTZGR0RGl3bkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVsNEJBcVRnV1JGbnc2T1JnLzZwL2Z1ck9iNHEzNTBDMmdxcStONEFXVGNvQVUrR2I5QjR4bEYzL1BDN3JWSGZ1RmdqVTRleVpOSFoycDdmUW9jS2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDA0NjMzOTE6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NzIyNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMd2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx3bC5qc29uIjogIntcImtleURhdGFcIjpcIkxncDR0Q3VhWmxIaHNMbTRSd21DdVBtTXp3TGtmNGdxQU94VmQxSXN1YUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEyMzc0MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDMzMjgyNTAyNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
