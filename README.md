ss-mubsub
=========

Easy integration of mubsub into socketstream

# Usage

* Add this package to your `package.json` and do `npm install`
* Add this line to your `app.js`: 

```javascript
ss.publish.transport.use(require('ss-mubsub'), {
  host: '127.0.0.1',
  port: 27017,
  db: 'example'},
  options: {});
```
The parameters above are the defaults. You only need to specify that which you want to change.

# Issues

Currently doesn't work due to bug in socketstream.  Waiting on my [pull request](https://github.com/socketstream/socketstream/pull/285).

# License

MIT
