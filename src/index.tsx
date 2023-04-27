import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {filters, bulk} from "enmity/modules"

const [
    Timeout
] = bulk(
    filters.byProps("Timeout")
)

const Patcher = create('NoBandwidthKick')

const NoBandwidthKick: Plugin = {
    ...manifest,
    onStart() {
        Patcher.before(Timeout.Timeout.prototype, 'start', (self, args, res) => {
            if (args[1].name === "disconnect") {
                args[1] = ()=>{}
            }
        })
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(NoBandwidthKick)
