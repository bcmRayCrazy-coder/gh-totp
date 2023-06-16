/// <reference path="types.d.ts" />

const token = "4I5YE5JJUHPUSYBI"

const oldNow = Date.now.bind(Date)
Date.now = () => Math.floor(oldNow() / 30000) * 30000
const nextNow = () => Math.floor(oldNow() / 30000) * 30000 + 30000

let oldCode = ""

setInterval(async () => {
    let newCode = await totp(token)
    if (oldCode != newCode) {
        oldCode =
        code.innerText = newCode
    }
    let val = Date.now()
    pg.max = nextNow() - val
    pg.value = oldNow() - val
    pg.value = pg.max - pg.value
}, 100)