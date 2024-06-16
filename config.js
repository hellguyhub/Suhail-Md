const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_19_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaU1vSDB2SWY4Y1N4enRhdVdiejBmNGwrNFBROEtzUzBWc0xoSUtDUVBiTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUd0dUxuaXVRSFd3WUtwV0NESXZKUVwiLFxuICBcInBob25lSWRcIjogXCIwMDZhYWRhMy1lYzMzLTRiMzYtOWJhZi04YjMzMjM3ODM2ZjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMTQyLFxuICAgICAgOTMsXG4gICAgICAxMjIsXG4gICAgICAxOTUsXG4gICAgICAxODcsXG4gICAgICAyMTIsXG4gICAgICAxMTYsXG4gICAgICAyMTYsXG4gICAgICA4NyxcbiAgICAgIDE0NCxcbiAgICAgIDUsXG4gICAgICAzNixcbiAgICAgIDE2LFxuICAgICAgMTg2LFxuICAgICAgNTgsXG4gICAgICAyMjAsXG4gICAgICAxODksXG4gICAgICAxNTYsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDE4LFxuICAgICAgMjUxLFxuICAgICAgODksXG4gICAgICAxMTgsXG4gICAgICAxNixcbiAgICAgIDE5MSxcbiAgICAgIDE2NSxcbiAgICAgIDIwNCxcbiAgICAgIDE5NyxcbiAgICAgIDMwLFxuICAgICAgODIsXG4gICAgICAxODIsXG4gICAgICA3NCxcbiAgICAgIDIwMCxcbiAgICAgIDExNSxcbiAgICAgIDIxMCxcbiAgICAgIDMsXG4gICAgICA2MSxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6bjVwOEhFTy9ldUxNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1F3QW8zTk5uRHhtWUZScmxqSnRxVlo2ZnYyQzdiNHI0V2o0aGhTRy9Taz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVWXY2YnRaNjAwY1VmQ2FLTy9jeTJ0bVVaQStqb0J4dnZ5Z0dBZ2R2ODhUVHN6dTFpM2pCdGhKQVlwRXV4N3dwQ2tyRGtTbWFXQUlrUTkrZ3k4aUVpUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQeC93RjhHV1lsUEtJS0VhQzZDQWNpMkpGY1JuZGJaYUhXYXd3WU0yRnN3Q2J1UzA3LzZmUElaNXlPdTVpazlKS2JjSC9BeVV5YzVReTNWdEkxMGhnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTQzNTg2MzA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwODE3MzUzMjg2ODgzMzoxNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTQzNTg2MzA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ5NzEzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5QclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK3ZZek5CNTIyTVhCOWVYOUdzZmw0NTRaYmlTNTJSU05uRkRPUGMvMmgyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzMDcyMjI3NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
