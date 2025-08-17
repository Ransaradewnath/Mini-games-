//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   ✦ ᴿᵃⁿᵘ ᴹᴰ ✦                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//
//
//
//██████╗░░█████╗░███╗░░██╗██╗░░░██╗
//██╔══██╗██╔══██╗████╗░██║██║░░░██║
//██████╔╝███████║██╔██╗██║██║░░░██║
//██╔══██╗██╔══██║██║╚████║██║░░░██║
//██║░░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//░░░░░░  ███╗░░░███╗██████╗░
//░░░░░░  ████╗░████║██╔══██╗
//█████╗  ██╔████╔██║██║░░██║
//╚════╝  ██║╚██╔╝██║██║░░██║
//░░░░░░  ██║░╚═╝░██║██████╔╝
//░░░░░░  ╚═╝░░░░░╚═╝╚═════╝░                       
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © ✦ ᴿᵃⁿᵘ ᴹᴰ ✦
//  * @version      : 1.0
//  * @author       : Ransara Devnath 
//  * @description  : © ✦ ᴿᵃⁿᵘ ᴹᴰ ✦, A Multi-functional WhatsApp bot created by Ransara Devnath.
//*
//*
//Base by Ransara Devnath 
//GitHub: @@ransara-devnath
//WhatsApp: +94726880784
//   * Created By GitHub: Ransara 
//   * Ransara Devnath 
//   * © 2025 © ✦ ᴿᵃⁿᵘ ᴹᴰ ✦-V1.
// ⛥┌┤
// */
//Thank you for Using This Open source project 
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session Id",
PORT: process.env.PORT || "8000"
};
