import { Flex, Text } from '@radix-ui/themes'
import { MdOutlineCode, MdOutlineMusicNote, MdOutlineGroup } from 'react-icons/md'

function App() {
  return (
    <Flex gap={'5'} direction="column" align="center" justify="center" style={{ height: '100vh' }}>
      
      <Text size="6">Coming soon!</Text>
      
      <Flex gap={'5'} direction="row">
        <MdOutlineMusicNote size={64} />
        <MdOutlineGroup size={64} />
        <MdOutlineCode size={64} />
      </Flex>
    </Flex>
  )
}

export default App
