import {  Card } from '@mui/material';

export default function StyledCard(props){
    return <Card  
            sx={{
                 borderRadius: 4,
                ":hover": {
                cursor:'pointer',
                background: '#bbdefb'},
                ...props.sx}}>
                {props.children}
             </Card>
}