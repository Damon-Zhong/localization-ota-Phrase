import { Card, Stack, CardActions, Button, Typography, CardContent } from '@mui/material'
import MC_EN from './locales/mc-en.json'
import MC_FR from './locales/mc-fr.json'
import { parseLocaleJson } from './utils'

const Home = () => {
  const resultMCEN = parseLocaleJson(MC_EN)
  const resultMCFR = parseLocaleJson(MC_FR)

  return (
    <Stack
      display="flex"
      sx={{ flex: 1, padding: 15, justifyContent: 'space-between', border: '1px solid green' }}
    >
      {/* MC EN */}
      <Card sx={{ width: 275 }}>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          MC English locales
        </Typography>

        <CardContent sx={{ padding: 6 }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Total translated keys
          </Typography>
          <Typography variant="h5" component="div">
            {resultMCEN.localeKeys.length}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Total characters
          </Typography>
          <Typography variant="h5" component="div">
            {resultMCEN.totalCharaters}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See all translations</Button>
        </CardActions>
      </Card>
      {/* MC FR */}
      <Card sx={{ width: 275 }}>
        <Typography variant="h5" sx={{ color: 'text.secondary' }}>
          MC French locales
        </Typography>

        <CardContent sx={{ padding: 6 }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Total translated keys
          </Typography>
          <Typography variant="h5" component="div">
            {resultMCFR.localeKeys.length}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Total characters
          </Typography>
          <Typography variant="h5" component="div">
            {resultMCFR.totalCharaters}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See all translations</Button>
        </CardActions>
      </Card>
    </Stack>
  )
}

export default Home
