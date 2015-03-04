process.umask(077);

var reStore = require('restore'),
    store   = new reStore.FileTree({path: '/var/lib/nodejs/restore/storage'}),

    server  = new reStore({
                store:  store,
                http:   {port: process.env.PORT},
                allow:  {signup:true}
              });

server.boot();

