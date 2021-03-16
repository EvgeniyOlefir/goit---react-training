import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  todosItem: {
    marginTop: 10,
    backgroundColor: '#eeeeff',
  },
});

const TodosItem = ({
  todo: { id, value, urgency, date, isDone },
  onToggle,
  onDelete,
}) => {
  const formattedDate = moment(date).format('YYYY/MM/DD hh:mm:ss');
  const handleDelete = () => onDelete(id);
  const handleToggle = () => onToggle(id);
  const classes = useStyles();

  return (
    <Card className={classes.todosItem}>
      <CardContent>
        <p>{value}</p>
        <p>{urgency}</p>
        <p>{formattedDate}</p>
      </CardContent>
      <CardActions>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
        <button onClick={handleDelete}>x</button>
      </CardActions>
    </Card>
  );
};

export default TodosItem;
