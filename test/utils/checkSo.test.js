import { isWin, isLock } from 'app/utils/checkSO';

jest.mock('lock-your-windows', ()=> ({
  isLocked : () => true
}));

describe('check so', () => {
  it('should not throw if platform is win32', () => {
    expect(() => isWin('linux')).toThrow(ErrorEvent);
  });

  it('should return valiation on lock system',() => {
    expect(isLock()).toEqual(true);
  })
})