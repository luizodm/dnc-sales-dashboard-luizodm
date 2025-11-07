import 'styled-components'
import type { AppTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    appBackground: AppTheme['appBackground']
    appColor: AppTheme['appColor']
    appDefaultStroke: AppTheme['appDefaultStroke']
    appLogo: AppTheme['appLogo']
    buttons: AppTheme['buttons']
    textInput: AppTheme['input']
    typographies: AppTheme['typographies']
    // adicionar outras chaves quando necessário
  }
}
