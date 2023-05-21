/// <reference path="types.d.ts" />

const token = "BFIIR4BUU7HFTKTB"

const oldNow = Date.now.bind(Date)
Date.now = () => Math.floor(oldNow() / 6)

let oldCode = ""

setInterval(async () => {
    let newCode = await totp(token)
    if (oldCode != newCode) {
        oldCode =
        code.innerText = newCode
    }
}, 100)