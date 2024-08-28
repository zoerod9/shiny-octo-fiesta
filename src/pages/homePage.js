// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';

function MyButton() {
    const myMessage = 'lesmoke'
    return (
        <button onClick={() => { alert(myMessage) }}>I'm a button</button>
    );
}
export default function HomePage() {


    return <div className="center">
        <AppBar sx={{
            background: '#501717',
        }}>
            <h2>lets moke</h2>
        </AppBar>
        
        

        <MyButton/>

    </div>
}