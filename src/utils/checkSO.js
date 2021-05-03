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