import { isWin, isLock, lock } from 'app/utils/SOUtils';
import cmd from 'node-cmd';

jest.mock('node-cmd');

describe('check so', () => {
  it('should not throw if platform is win32', () => {
    expect(() => isWin('linux')).toThrow(ErrorEvent);
  });

  it('should return valiation on lock system', () => {
    [
      {
        result: { data: 'Found task' },
        expectedStatus: true,
      },
      {
        result: { data: null },
        expectedStatus: false,
      },
    ].forEach((test) => {
      cmd.runSync.mockReturnValue(test.result);
      expect(isLock()).toEqual(test.expectedStatus);
    });
  })

})