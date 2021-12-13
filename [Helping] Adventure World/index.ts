const addons:string[] = [];
function loadAddon(){
    const files = readdirSync(path.dirname(__filename)+"/modules");
    files.forEach((v)=>{
        if (v.endsWith('ts')) return;
        require(path.dirname(__filename)+"/modules"+v);
        addons.push(v);
    });
}

if (bedrockServer.isLaunched()) loadAddon();
else events.serverOpen.on(()=>{
    loadAddon();
});
