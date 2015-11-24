process.umask(077);

var reStore = require('restore'),
    store   = new reStore.FileTree({path: '/var/lib/nodejs/restore/storage'}),

    server  = new reStore({
                store:  store,
                http:   {host: '127.0.0.1', port: process.env.PORT},
                allow:  {signup:true}
              });

server.boot();

