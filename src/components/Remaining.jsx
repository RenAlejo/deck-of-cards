import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Remaining = ( { remainingCards = '0' } ) => {
  return (
    <Card sx={{ display: 'inline-flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
        alignItems: 'center',
        justifyContent: 'end',
        marginTop:'20%'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, display:'flex', justifyContent:'center' }} color="text.secondary" gutterBottom>
          Remaining
        </Typography>
        <Typography sx={{ fontSize: 30, display:'flex', justifyContent:'center', marginTop:'15px'}} color="text.secondary" variant="h5" component="div">
          { remainingCards }
        </Typography>
      </CardContent>
    </Card>
  );
}

