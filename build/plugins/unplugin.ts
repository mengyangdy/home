import Components from 'unplugin-vue-components/vite'
import {PluginOption} from 'vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'

export function setupUnplugin() {
  const plugins: PluginOption[] = [
    Components({
      dts: 'src/typings/components.d.ts',
      resolvers:[
        NaiveUiResolver()
      ]
    })
  ]

  return plugins
}