exports.getMime = function(extname){
    switch(extname){
        case '.css': return 'text/css';
        case '.js': return 'text/javascript';
        default: return 'text/html';
    }
}