export default (platform) => {    
    if(platform !== 'win32'){
        throw new ErrorEvent('It can only use windows')
    }
}