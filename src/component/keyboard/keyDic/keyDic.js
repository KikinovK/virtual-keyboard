import keyDicEnLowCase from './keyDicEnLowCase';
import keyDicEnUpCase from './keyDicEnUpCase';
import keyDicEnCapsLock from './keyDicEnCapsLock';
import keyDicEnCapsLockLowCase from './keyDicEnCapsLockLowCase';
import keyDicRuLowCase from './keyDicRuLowCase';
import keyDicRuUpCase from './keyDicRuUpCase';
import keyDicRuCapsLock from './keyDicRuCapsLock';
import keyDicRuCapsLockLowCase from './keyDicRuCapsLockLowCase';

const keyDic = [
  {
    lowCase: keyDicEnLowCase,
    upCase: keyDicEnUpCase,
    capsLock: keyDicEnCapsLock,
    capsLockLowCase: keyDicEnCapsLockLowCase,
  },
  {
    lowCase: keyDicRuLowCase,
    upCase: keyDicRuUpCase,
    capsLock: keyDicRuCapsLock,
    capsLockLowCase: keyDicRuCapsLockLowCase,
  },
];

export default keyDic;
