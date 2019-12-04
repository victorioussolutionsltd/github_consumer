export const style = (theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3),
    },
  })

  export const getModalStyle = () => {
    const top = 50;
    const left = 50;
  
    return {
      postion: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      border: 'none',
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  export default style;