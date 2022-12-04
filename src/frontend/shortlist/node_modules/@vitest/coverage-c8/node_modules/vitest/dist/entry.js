import { promises } from 'fs';
import { g as getWorkerState, a as resetModules } from './chunk-mock-date.9fe2b438.js';
import { a as envs } from './chunk-env-node.700b7e95.js';
import { a as setupGlobalEnv, s as startTests, w as withEnv } from './chunk-runtime-error.b043a88d.js';
import 'path';
import './chunk-utils-env.b1281522.js';
import 'tty';
import 'url';
import 'local-pkg';
import 'console';
import 'perf_hooks';
import './chunk-integrations-coverage.cca09977.js';
import './chunk-runtime-hooks.6963ff8f.js';
import './chunk-runtime-chain.072b5677.js';
import 'util';
import 'chai';
import './vendor-_commonjsHelpers.addc3445.js';
import './chunk-runtime-rpc.e583f5e7.js';
import './chunk-utils-timers.ab764c0c.js';
import './chunk-utils-source-map.d9d36eb0.js';
import './spy.js';
import 'tinyspy';

function groupBy(collection, iteratee) {
  return collection.reduce((acc, item) => {
    const key = iteratee(item);
    acc[key] || (acc[key] = []);
    acc[key].push(item);
    return acc;
  }, {});
}
async function run(files, config) {
  await setupGlobalEnv(config);
  const workerState = getWorkerState();
  if (config.browser) {
    workerState.mockMap.clear();
    await startTests(files, config);
    return;
  }
  const filesWithEnv = await Promise.all(files.map(async (file) => {
    var _a, _b;
    const code = await promises.readFile(file, "utf-8");
    const env = ((_a = code.match(/@(?:vitest|jest)-environment\s+?([\w-]+)\b/)) == null ? void 0 : _a[1]) || config.environment || "node";
    const envOptions = JSON.parse(((_b = code.match(/@(?:vitest|jest)-environment-options\s+?(.+)/)) == null ? void 0 : _b[1]) || "null");
    return {
      file,
      env,
      envOptions: envOptions ? { [env]: envOptions } : null
    };
  }));
  const filesByEnv = groupBy(filesWithEnv, ({ env }) => env);
  const orderedEnvs = envs.concat(
    Object.keys(filesByEnv).filter((env) => !envs.includes(env))
  );
  for (const env of orderedEnvs) {
    const environment = env;
    const files2 = filesByEnv[environment];
    if (!files2 || !files2.length)
      continue;
    const filesByOptions = groupBy(files2, ({ envOptions }) => JSON.stringify(envOptions));
    for (const options of Object.keys(filesByOptions)) {
      const files3 = filesByOptions[options];
      if (!files3 || !files3.length)
        continue;
      await withEnv(environment, files3[0].envOptions || config.environmentOptions || {}, async () => {
        for (const { file } of files3) {
          if (config.isolate) {
            workerState.mockMap.clear();
            resetModules(workerState.moduleCache, true);
          }
          workerState.filepath = file;
          await startTests([file], config);
          workerState.filepath = void 0;
        }
      });
    }
  }
}

export { run };
