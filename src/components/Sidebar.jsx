import { AtSignIcon, CalendarIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div>
            <List color="white" fontSize="1.2em" spacing={4} display={{lg:'inline', nd: 'none' }}>
                <ListItem>
                    <NavLink to="/">
                        <ListIcon as={CalendarIcon} color="white" />
                        Home
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/partslist">
                        <ListIcon as={EditIcon} color="white" />
                        Part List
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/partsnew">
                        <ListIcon as={AtSignIcon} color="white" />
                        Part New
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/partsviewcard">
                        <ListIcon as={ViewIcon} color="white" />
                        Part Cards
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/partstable">
                        <ListIcon as={ViewIcon} color="white" />
                        Parts Table
                    </NavLink>
                </ListItem>
            </List>
        </div>
    );
}

