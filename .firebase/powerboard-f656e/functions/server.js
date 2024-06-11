import { onRequest } from 'firebase-functions/v2/https';
  const server = import('firebase-frameworks');
  export const ssrpowerboardf656e = onRequest({"region":"us-east1","maxInstances":1}, (req, res) => server.then(it => it.handle(req, res)));
  