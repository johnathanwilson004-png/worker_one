const { exec } = require('child_process');

console.log('--- S22 Engine Room: Syncing Harvest to Sanctuary ---');

// Automatically pushes your harvest logs to GitHub every hour
setInterval(() => {
    exec('git add harvest_log.txt && git commit -m "Syncing Latest Harvest" && git push origin main', (err) => {
        if (err) console.log('Sync failed: ' + err);
        else console.log('Harvest successfully pushed to A35 Sanctuary.');
    });
}, 3600000); 
