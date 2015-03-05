process.umask(077);

var reStore = require('restore'),
    store   = new reStore.FileTree({path: '/var/lib/nodejs/restore/storage'});

store.createUser({username: 'fbx', email: 'fbx@freedom.box', password: 'frdm'});
