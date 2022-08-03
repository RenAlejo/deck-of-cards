import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Remaining = ( { remainingCards = '0' } ) => {
  return (
    <Card  className='' sx=
    {
        { 
        top              :'3',
        position         :'fixed',
        zIndex           :'20',
        height           :'36px',
        width            :'300px', 
        background       :'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%)'   
        }
      }>
      <CardContent>
        <Typography sx={{ fontSize: 14, display:'flex', justifyContent:'center', color: '#FFF', marginTop: '-8px'}} color="text.primary" gutterBottom>
          Remaining : { remainingCards }
        </Typography>
      </CardContent>
    </Card>
  );
}

