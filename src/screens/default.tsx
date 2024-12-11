import { Flex } from '@radix-ui/themes'

import { ShaderGradientBackground } from '../backgrounds'
import { IconTest } from '../components'


function DefaultScreen() {

  return (
    <>
      <Flex
        direction='column'
        align='center'
        justify='center'
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          position: 'fixed'
        }}
      >
        <IconTest />
      </Flex>
      <ShaderGradientBackground />
    </>
  )
}

export default DefaultScreen
