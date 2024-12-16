import { Card, Stack, CardActions, Button, Typography, CardContent } from '@mui/material'
import MC_EN from './locales/mc-en.json'
import MC_FR from './locales/mc-fr.json'
import MA_EN from './locales/ma-en.json'
import MA_FR from './locales/ma-fr.json'
import { parseLocaleJson } from './utils'

const Home = () => {
  const resultMCEN = parseLocaleJson(MC_EN)
  const resultMCFR = parseLocaleJson(MC_FR)
  const resultMAEN = parseLocaleJson(MA_EN)
  const resultMAFR = parseLocaleJson(MA_FR)

  return (
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
          <Button size="small">Learn More</Button>
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
          <Button size="small">Learn More</Button>
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
          <Button size="small">Learn More</Button>
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
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Stack>
  )
}

export default Home
