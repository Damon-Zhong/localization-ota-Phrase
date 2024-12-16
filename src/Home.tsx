import { Card, Stack, CardActions, Button, Typography, CardContent } from '@mui/material'
import MC_EN from './locales/mc-en.json'
import MC_FR from './locales/mc-fr.json'
import MA_EN from './locales/ma-en.json'
import MA_FR from './locales/ma-fr.json'
import { parseLocaleJson } from './utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [display, setDisplay] = useState('MC_EN')
  const resultMCEN = parseLocaleJson(MC_EN)
  const resultMCFR = parseLocaleJson(MC_FR)
  const resultMAEN = parseLocaleJson(MA_EN)
  const resultMAFR = parseLocaleJson(MA_FR)

  const readTranslation = () => {
    let readKeys = resultMCEN
    let translateFile = MC_EN

    switch (display) {
      case 'MC_EN':
        readKeys = resultMCEN
        translateFile = MC_EN
        break
      case 'MC_FR':
        readKeys = resultMCEN
        translateFile = MC_FR

        break
      case 'MA_EN':
        readKeys = resultMAEN
        translateFile = MA_EN

        break
      case 'MA_FR':
        readKeys = resultMAEN
        translateFile = MA_FR

        break
      default:
        break
    }
    return readKeys.localeKeys.map((localeKey) => {
      const nestedKeys = localeKey.split('.')
      let translate = ''

      nestedKeys.forEach((k: string) => {
        translate = translate ? translate[k] : translateFile[k]
      })

      return (
        <Typography sx={{ color: !translate ? 'red' : 'white' }}>
          {localeKey}: {translate}
        </Typography>
      )
    })
  }

  return (
    <Stack>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        sx={{
          flex: 1,
          padding: 10,
          flexDirection: 'row',
          border: '1px solid green'
        }}
      >
        {/* MC EN */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              MC English locales
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Total translate keys: {resultMCEN.localeKeys.length}
            </Typography>
            <Typography variant="body2">Total characters: {resultMCEN.totalCharaters}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setDisplay('MC_EN')}>
              Learn More
            </Button>
            <Link to="/phrase">Phrase</Link>
          </CardActions>
        </Card>
        {/* MC FR */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              MC French locales
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Total translate keys: {resultMCFR.localeKeys.length}
            </Typography>
            <Typography variant="body2">Total characters: {resultMCFR.totalCharaters}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setDisplay('MC_FR')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/* MA EN */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              MA English locales
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Total translate keys: {resultMAEN.localeKeys.length}
            </Typography>
            <Typography variant="body2">Total characters: {resultMAEN.totalCharaters}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setDisplay('MA_EN')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        {/* MA FR */}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              MA French locales
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Total translate keys: {resultMAFR.localeKeys.length}
            </Typography>
            <Typography variant="body2">Total characters: {resultMAFR.totalCharaters}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setDisplay('MA_FR')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Stack>
      {display && <Stack>{readTranslation()}</Stack>}
    </Stack>
  )
}

export default Home
