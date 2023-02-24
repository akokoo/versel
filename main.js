// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

// Initialize Channels client
let channels = new Pusher('8b06b1a523db9624e584', {
    cluster: 'eu',
  });
  
  // Subscribe to the appropriate channel
  let channel = channels.subscribe('channel-name');
  
  // Bind a callback function to an event within the subscribed channel
  channel.bind('event-name', function (data) {
    // Do what you wish with the data from the event
    alert(JSON.stringify(data));
    
  });