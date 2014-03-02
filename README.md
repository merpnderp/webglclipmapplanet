webglclipmapplanet
==================

A WebGL/Three.js library for real time LoD geometric clipmap planets

##Installing Dependencies

###Install all dependencies locally

```

sudo npm install

```

###Install all dependencies seperately

####browserify

http://browserify.org/

```

npm install -g browserify

```

#### brfs

https://www.npmjs.org/package/brfs

```

npm install brfs

```

####watchify

https://github.com/substack/watchify

```

npm install -g watchify

```

#####Trouble Shooting Install

If you have issues with a self-signed cert error:

```

npm ERR! Error: SELF_SIGNED_CERT_IN_CHAIN
npm ERR!     at SecurePair.<anonymous> (tls.js:1362:32)
npm ERR!     at SecurePair.EventEmitter.emit (events.js:92:17)
npm ERR!     at SecurePair.maybeInitFinished (tls.js:974:10)
npm ERR!     at CleartextStream.read [as _read] (tls.js:462:15)
npm ERR!     at CleartextStream.Readable.read (_stream_readable.js:320:10)
npm ERR!     at EncryptedStream.write [as _write] (tls.js:366:25)
npm ERR!     at doWrite (_stream_writable.js:221:10)
npm ERR!     at writeOrBuffer (_stream_writable.js:211:5)
npm ERR!     at EncryptedStream.Writable.write (_stream_writable.js:180:11)
npm ERR!     at write (_stream_readable.js:583:24)
npm ERR!     at flow (_stream_readable.js:592:7)
npm ERR!     at Socket.pipeOnReadable (_stream_readable.js:624:5)
npm ERR! If you need help, you may report this log at:
npm ERR!     <http://github.com/isaacs/npm/issues>
npm ERR! or email it to:
npm ERR!     <npm-@googlegroups.com>

```

run this command:

```

npm config set strict-ssl false

```



## Building Project

Building projects is handled with npm

https://www.npmjs.org/

```

npm build

```

or for debugging with watchify

```

npm watch

```

## Running Project

This will build the project and then start the node webserver

```

npm start

```

