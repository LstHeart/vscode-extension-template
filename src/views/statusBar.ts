import { useStatusBarItem, watchEffect } from 'reactive-vscode'
import * as Meta from '../generated/meta'
import { config } from '../configs'
import { Log } from '../utils'

export function useStatusBar() {
  const statusBar = useStatusBarItem({
    alignment: 2,
    priority: 100,
    text: `helloWorld`,
    tooltip: `helloWorld`,
    command: Meta.commands.helloWorld,
  })

  watchEffect(() => {
    Log.info('Show Status Bar:', config.showStatusBar)
    if (config.showStatusBar) {
      statusBar.show()
    } else {
      statusBar.hide()
    }
  })
}
