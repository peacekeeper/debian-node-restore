process.umask(077);

var reStore = require('restore'),
    store   = new reStore.FileTree({path: 'storage'}),

    server  = new reStore({
                store:  store,
                http:   {port: process.env.PORT}
              });

server.boot();

