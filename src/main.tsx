import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

import { DefaultScreen } from './screens'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Theme
        accentColor='mint'
        grayColor='gray'
        panelBackground='translucent'
        scaling='100%'
        radius='full'
        appearance='dark'
      >
        <DefaultScreen />
      </Theme>
    </StrictMode>
  )
}
