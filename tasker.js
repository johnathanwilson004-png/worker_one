const cron = require('node-cron');
let pulseCount = 0;

console.log('--- S22 Engine Room: Layer 1 Data Pulse Active ---');

// Pulses every 30 minutes now to increase "Presence"
cron.schedule('*/30 * * * *', () => {
  pulseCount++;
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] Pulse #${pulseCount}: System stable. Ready for Data Packets.`);
});

console.log('Monitoring active. Next sync with A35 Sanctuary in progress.');
