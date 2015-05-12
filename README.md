# X-Agent

Chrome/Chromium extension to spoof user agent.
Modifies both outgoing requests 'User-Agent' header and javascript object including navigator.appVersion!

This extension doesn't have any UI and its fairly dumb, yet it works great!
But on the other hand it doesn't have any tracking/Analytics code in it, and its short enough for you to review literally in 1 minute.

For maximum privacy use chromium and disable all plugins on `chrome://plugins/` as they may easily disclose your platform.
 
For fresh user agents visit: <a href='https://techblog.willshouse.com/2012/01/03/most-common-user-agents/'>Most common User Agents (updates daily)</a>

## Structure

- `manifest.json`  Standard extension configuration file 
- `background.js`  Contains the outgoing request sniffer and modify header according to `USERAGENT' variable value 
- `xagentScript.js`  Small content script that inject the actual script
- `xagent.js`  Modifies the javascript ```js navigator``` object according to the variables in the top of the script
 
 
# Usage
 
 1. Download this project to a local folder on your machine (extracted in a folder)
 2. Modify the wanted userAgent in `background.js` and `xagent.js`
 3. Go to `chrome://extensions/`
 4. Enable Developer mode
 5. Click `Load unpacked extension...`
 6. Select the folder you unpacked the file to
 7. Optional: check 'Allow in incognito' (feel free to review the code before you do so)
 8. That's it! check results by visiting <a href='https://techblog.willshouse.com/2012/01/03/most-common-user-agents/'>Most common User Agents </a> 