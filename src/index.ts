import { defineExtension, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { Log } from './utils'
import { useCommands } from './commands'
import { useStatusBar } from './views/statusBar'

const { activate, deactivate } = defineExtension(() => {
  Log.info('Extension Activated')

  useCommands()
  useStatusBar()

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    Log.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
