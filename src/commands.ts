import { useCommand } from 'reactive-vscode'
import { window } from 'vscode'
import { config } from './configs'
import { Log } from './utils'

export function useCommands() {
  useCommand('vscode-template.helloWorld', () => {
    Log.info('Hello World Command Triggered', config.message)
    window.showInformationMessage(config.message)
  })
}
