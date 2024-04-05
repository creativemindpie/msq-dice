
Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"msq_dice",name:"MSQ Dice Pack"},true);
    
    dice3d.addDicePreset({
        type: "d4",
        modelFile: "modules/msq-dice/models/msq-d4.glb",
        system: "msq_dice"
    });
    
    // dice3d.addDicePreset({
    //     type: "d6",
    //     modelFile: "modules/msq-dice/models/msq-d6.glb",
    //     system: "msq_dice"
    // });
});