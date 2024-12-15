import { Stack } from '@mui/material'
import MC_EN from './locales/mc-en.json'
import MC_FR from './locales/mc-fr.json'
import { parseLocaleJson } from './utils'

const Home = () => {
  const resultMCEN = parseLocaleJson(MC_EN)
  const resultMCFR = parseLocaleJson(MC_FR)

  return <Stack sx={{ flex: 1, border: '1px solid green' }}>Home</Stack>
}

export default Home
