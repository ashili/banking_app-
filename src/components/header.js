import React from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';

const title = 'Banking APP';

const Header = () => (
    <div className='Header'>
        <AppBar position='static' color='secondary'>
            <Toolbar className='Head'>
                <Typography className='app-name' variant='h4' color='inherit'>
                    {title}
                </Typography>

                <div className='actions'>
                    <Link to='/' className='links'>
                        {' '}
                        <span color='inherit' href='/home' aria-label='add'>
              <AssignmentIcon />
            </span>
                    </Link>

                    <Link to='/listView' className='links'>
                        {' '}
                        <span color='inherit' href='/history' aria-label='add'>
              <ListAltIcon />
            </span>
                    </Link>

                    <Link to='/addAccount' className='links'>
                        {' '}
                        <span color='inherit' href='/addAccount' aria-label='add'>
              <AddIcon />
            </span>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;
