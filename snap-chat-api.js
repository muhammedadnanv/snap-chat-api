const SnapchatAPI = require('snapchat-api');
const fs = require('fs');

const username = 'your_snapchat_username';
const password = 'your_snapchat_password';

const snapchat = new SnapchatAPI();

// Function to log in to Snapchat
async function login() {
  try {
    await snapchat.login(username, password);
    console.log('Logged in successfully!');
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

// Function to send a snap
async function sendSnap() {
  try {
    // Get your friend's Snapchat username
    const friendUsername = 'friend_snapchat_username';

    // Send a snap with a caption
    const mediaId = await snapchat.send({
      type: 'photo', // or 'video'
      media: fs.createReadStream('path/to/your/photo.jpg'), // Replace with your file path
      time: 3, // Display time in seconds
      to: friendUsername,
      caption: 'Hello from your Snapchat bot!',
    });

    console.log('Snap sent successfully with media ID:', mediaId);
  } catch (error) {
    console.error('Error sending snap:', error);
  }
}

// Log in and send a snap
login().then(() => sendSnap());
