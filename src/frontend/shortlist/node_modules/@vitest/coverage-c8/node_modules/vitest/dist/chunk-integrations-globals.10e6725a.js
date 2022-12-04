import { m as globalApis } from './chunk-utils-env.b1281522.js';
import { i as index } from './chunk-runtime-hooks.6963ff8f.js';
import 'tty';
import 'url';
import 'path';
import './chunk-runtime-chain.072b5677.js';
import 'util';
import './chunk-mock-date.9fe2b438.js';
import 'local-pkg';
import 'chai';
import './vendor-_commonjsHelpers.addc3445.js';
import './chunk-runtime-rpc.e583f5e7.js';
import './chunk-utils-timers.ab764c0c.js';
import 'fs';
import './chunk-utils-source-map.d9d36eb0.js';
import './spy.js';
import 'tinyspy';

function registerApiGlobally() {
  globalApis.forEach((api) => {
    globalThis[api] = index[api];
  });
}

export { registerApiGlobally };
