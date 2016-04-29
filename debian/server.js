/*
 * Upstream "restore" is basically a library that can be used
 * to run a remoteStorage server. This requires a simple script
 * which is not part of upstream, but supplied here in this file.
 * This is based on an example provided in the upstream README:
 * https://github.com/jcoglan/restore
 */

process.umask(077);

var reStore = require('restore'),
    store   = new reStore.FileTree({path: '/var/lib/node-restore/storage'}),

    server  = new reStore({
                store:  store,
                http:   {host: '127.0.0.1', port: process.env.PORT},
                allow:  {signup:true}
              });

server.boot();

