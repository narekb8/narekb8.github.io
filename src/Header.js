import './App.css';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

export default function HeaderNav(props) {
    return (
        <AppBar className="navi" position='static' color='secondary'>
            <Toolbar>
                {props.children}
            </Toolbar>
        </AppBar>
    );
}