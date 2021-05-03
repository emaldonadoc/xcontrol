const { exec } = require('child_process');

export const isWin = (platform) => {
    if (platform !== 'win32') {
        throw new ErrorEvent('It can only use windows')
    }
}

export const isLock = () => {
    exec('tasklist | find "LogonUI.exe"', (error, stdout, stderr) => {
        console.log({ stdout, stderr, error })
    })
}