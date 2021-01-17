class SceneSwitcher {
    _socket;
    _requestNumber = 1;
    _notPlayingSongScene = notPlayingSongScene;
    _playingSongScene = playingSongScene;
    constructor() {
        this._socket = new WebSocket(`ws://${wsIp}:${wsPort}`);
    }
    setNotPlayingSongScene = (notPlayingSongScene) => {
        this._notPlayingSongScene = notPlayingSongScene;
    }
    setPlayingSongScene = (playingSongScene) => {
        this._playingSongScene = playingSongScene;
    }
    switchToNotPlayingSongScene = () => {
        const message = JSON.stringify({
            'request-type': 'SetCurrentScene',
            'scene-name': this._notPlayingSongScene,
            'message-id': this._requestNumber++
        });
        console.log('switchToNotPlayingSongScene', message);
        console.log('socket', this._socket);
        if (this._socket.OPEN) {
            this._socket.send(message);
        }
    }
    switchToPlayingSongScene = () => {
        const message = JSON.stringify({
            'request-type': 'SetCurrentScene',
            'scene-name': this._playingSongScene,
            'message-id': this._requestNumber++
        });
        console.log('switchToPlayingSongScene', message);
        console.log('socket', this._socket);
        if (this._socket.OPEN) {
            this._socket.send(message);
        }
    }
}