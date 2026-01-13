import { Avatar, Box, Flex, Grid, Link, Text } from '@radix-ui/themes'
import { FaGithub, FaGlobe, FaLinkedin, FaOrcid } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

// Custom glass card styles that work on Safari (backdrop-filter can't blur WebGL canvas)
const glassCardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(40, 40, 60, 0.4) 0%, rgba(30, 30, 50, 0.5) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  padding: '20px',
}

export default function LinksCard() {
  return (
    <div style={glassCardStyle}>
      <Grid
        columns={{ 'sm': '2', 'md': '1' }}
        gap="3"
        rows={{ 'sm': '1', 'md': 'repeat(3, 64px)' }}
        width="auto"
      >
        <Link href="https://linkedin.com/in/jakecariello">
          <Flex gap="3" align="center">
            <Avatar
              size="4"
              fallback={<FaLinkedin size={25} />}
            />
            <Box>
              <Text>jakecariello</Text>
            </Box>
          </Flex>
        </Link>

        <Link href="mailto:jakecariello@gmail.com">
          <Flex gap="3" align="center">
            <Avatar
              size="4"
              fallback={<SiGmail size={25} />}
            />
            <Box>
              <Text>jakecariello</Text>
            </Box>
          </Flex>
        </Link>

        <Link href="https://cariello.dev">
          <Flex gap="3" align="center">
            <Avatar
              size="4"
              fallback={<FaGlobe size={25} />}
            />
            <Box>
              <Text>cariello.dev</Text>
            </Box>
          </Flex>
        </Link>
        <Link href="https://github.com/jakecariello">
          <Flex gap="3" align="center">
            <Avatar
              size="4"
              fallback={<FaGithub size={25} />}
            />
            <Box>
              <Text>jakecariello</Text>
            </Box>
          </Flex>
        </Link>
        <Link href="https://orcid.org/0000-0001-7288-9943">
          <Flex gap="4" align="center">
            <Avatar
              size="4"
              fallback={<FaOrcid size={25} />}
            />
            <Box>
              <Text>0000-0001-7288-9943</Text>
            </Box>
          </Flex>
        </Link>
      </Grid>
    </div>
  )
}