import { makeStyles } from "@mui/styles";
import variables from '../sass/_variable.module.scss'

// pagination style
export const usePaginationStyle = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      '&:hover': {
        background: `${variables.colorPink}`,
        color: 'white',
      },
      
      '&.Mui-selected': {
        background: `${variables.colorPink}`,
        color: 'white',
        '&:hover': {
          background: `${variables.colorPink}`,
          color: 'white',
        },
      },
    },

  }
}));