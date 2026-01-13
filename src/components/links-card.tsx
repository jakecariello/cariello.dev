import { Avatar, Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes'
import { FaGithub, FaGlobe, FaLinkedin, FaOrcid } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


export default function LinksCard() {
  return (
    <Card>
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
    </Card>
  )
}