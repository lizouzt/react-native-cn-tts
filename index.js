import {
  NativeModules,
  NativeEventEmitter,
  Platform,
} from 'react-native';

const CNTTS = Platform.OS == 'android' ? NativeModules.CNTTS : {};

class Tts extends NativeEventEmitter {
    constructor() {
        super(CNTTS);
    }

    init=CNTTS.init

    speak (content) {
        return CNTTS.speak(content)
    }
    stop () {
        return CNTTS.stop()
    }
    resume () {
        return CNTTS.resume()
    }
    pause () {
        return CNTTS.pause()
    }

    addEventListener(type, handler) {
        this.addListener(type, handler);
    }

    removeEventListener(type, handler) {
        this.removeListener(type, handler);
    }
}

export default new Tts()