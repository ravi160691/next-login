import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Gola(prop) {
    return (
        <div>
			<Fab color={prop.color} aria-label="add">
			<AddIcon />
			</Fab>
		</div>
    );
}