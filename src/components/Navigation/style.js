import { createUseStyles } from 'react-jss';

export default createUseStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid#000',
    listStyle: 'none',
    margin: x => {
      return x > 5 ? '10px' : '0px';
    },
    padding: 10,
    width: 200,
    overflow: 'auto',
  },

  link: isActive => ({
    backgroundColor: isActive ? '#2f2e73' : 'inherit',
    textDecoration: 'none',
    padding: '10px',
    color: isActive ? '#fff' : '#000',

    '&:hover': {
      backgroundColor: isActive ? '#151433' : '#e0dff2',
    },
  }),
});
