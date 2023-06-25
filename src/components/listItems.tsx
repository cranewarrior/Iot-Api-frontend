import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import MapIcon from '@mui/icons-material/Map';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import authService from "./../services/auth.service";
import { useNavigate } from "react-router-dom";



export const MainListItems = () => {
  const navigate = useNavigate();
  return (<React.Fragment>
    <ListItemButton onClick={() => { navigate('/devices') }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Devices" />
    </ListItemButton>
    {authService.getCurrentUser().roles == 'admin' ?
      <ListItemButton onClick={() => { navigate('/users') }}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      : <></>}
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Chart" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItemButton>
  </React.Fragment>)

};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Additional
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Additional Info" />
    </ListItemButton>
  </React.Fragment>
);