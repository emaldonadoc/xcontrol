import lockWindowsApi from 'lock-your-windows';

export const isWin = (platform) => {    
    if(platform !== 'win32'){
        throw new ErrorEvent('It can only use windows')
    }
}

export const isLock = () => {
    return lockWindowsApi.isLocked()
}