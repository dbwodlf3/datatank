declare global {
    interface Window { paths: any }
} 

let paths: {[key: string]: any; } = {};

if(window) {
    if(!window.paths) window.paths = paths;
    else paths = window.paths;
}
else {
    throw new Error("Can't find window!");
}

function dataRouter (path: string){
    if (!paths[path]) {
        paths[path] = {};
    }

    return paths;
}

export default dataRouter;
  