import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import Main from 'layouts/Main';
import { Hero, Services } from './components';

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Hero />
        <Container>
          <Services />
        </Container>
      </Main>
    </Box>
  );
};

export default IndexView;
