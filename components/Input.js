import { TextField } from '@mui/material';

export default function Input(props) {
    const {id,type=''} = props;
    return (
        <div>
			<TextField
                required
                id={id}
                name="outlined-required"
                label="Required"
                type={type}
                //defaultValue="Hello World"
            />
		</div>
    );
}

