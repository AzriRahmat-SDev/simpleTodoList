import { Container, Typography, Box } from '@mui/material';
import image from './images/bg-desktop-light.jpg';

function App() {
	return (
		<Container
			maxWidth="false"
			sx={{
				bgcolor: '#e4e5f1',
				backgroundPosition: 'center center',
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '40vh',
				width: '100vw',
			}}
		>
			<Box>
				<Typography variant="h1" color="primary.light" textAlign="center">
					Todo
				</Typography>
			</Box>
		</Container>
	);
}

export default App;
