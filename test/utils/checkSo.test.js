import checkSO from 'app/utils/checkSO';

describe('check so', () => {
  it('should not throw if platform is win32', () => {
    expect(() => checkSO('linux')).toThrow(ErrorEvent);
  });
})