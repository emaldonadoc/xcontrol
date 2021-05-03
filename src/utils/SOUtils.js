import cmd from 'node-cmd';

export const isWin = (platform) => {
    if (platform !== 'win32') {
        throw new ErrorEvent('It can only use windows')
    }
}

export const isLock = () => {
    const resultTask = cmd.runSync('tasklist | find "LogonUI.exe"');
    return !!resultTask.data;
}

export const lock = () => {
    const commandResult = cmd.runSync("rundll32.exe user32.dll,LockWorkStation")
    console.log({ commandResult });
}