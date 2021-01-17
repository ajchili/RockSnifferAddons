# RockSnifferAddons

RockerSnifferAddons is a repsoitory to hold addons that I use when streaming
Rocksmith 2014 to [Twitch](https://twitch.tv). These addons are modified from
the original [RockSniffer](https://github.com/kokolihapihvi/RockSniffer)
repository.

## Setup

1. Download [RockSniffer](https://github.com/kokolihapihvi/RockSniffer)
2. Download [obs-websocket](https://github.com/Palakis/obs-websocket)
3. Install obs-websocket
4. Download [RockSnifferAddons](https://github.com/ajchili/RockSnifferAddons/releases)
5. Set the websocket settings in the **addons/config.js** file

    ```Javascript
    // Sniffer addon service connection details
    var ip = "127.0.0.1";
    var port = 9938;
    // OBS WS connection details (change below if needed)
    var wsIp = 'localhost';
    var wsPort = 4444;
    var notPlayingSongScene = 'Rocksmith (Waiting)';
    var playingSongScene = 'Rocksmith (Song)';
    ```

6. Add desired addons to OBS as a browser source
7. Stream