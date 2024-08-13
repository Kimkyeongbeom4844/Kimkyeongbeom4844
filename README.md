```typescript
// introduce.ts
'use strict'

interface User {
  name : string;
  introduce : string;
  university : string;
  major : string;
  skill : string[];
  etc ?: any;
};

const user:User = {
  name : 'Kim Kyeong Beom',
  introduce : 'Play On Weekends, Study On Weekdays',
  university : 'Jeju National University.',
  major : 'Computer Engineering',
  skill : [
    'TypeScript',
    'Next',
    'Nuxt',
    'ReactNative',
    'Recoil',
    'ReduxToolKit',
    'Pinia',
    'Express',
    'Docker',
  ],
};
```
