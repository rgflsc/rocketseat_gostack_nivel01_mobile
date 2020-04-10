import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador:
 *    adb reverse tcp:3333 tcp:3333 -> usa localhost
 * Android com emulador:
 *    10.0.2.2 -> emulador do android studio
 * Android com emulador:
 *    10.0.3.2 -> emulador do genymotion
 * Android com físico: IP da máquina
 */