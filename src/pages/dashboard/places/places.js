import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, Pagination, Rating, TableHead, TextField, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import usePagination from '../../../hooks/usePagination';
import { fetchPlacesData } from '../../../redux/action/places-action';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { usePaginationStyle } from '../../../custom-mui-styles';


const Places = () => {

    const classes = usePaginationStyle();
    const [defaultPage, setDefaultPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const placesData = useSelector(state => state?.places?.data);
    const data = usePagination(placesData, rowsPerPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlacesData())
    }, [dispatch])


    const rows = [5, 10, 25, placesData.length];

    const handleOnChangePage = (e, p) => {
        setDefaultPage(p);
        data.jump(p);
    };

    const handleChange = (event) => {
        setRowsPerPage(event.target.value);
    };


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Image</TableCell>
                        <TableCell align='left'>Place</TableCell>
                        <TableCell align='left'>Country</TableCell>
                        <TableCell align='left'>Rating</TableCell>
                        <TableCell align='left'>Cost</TableCell>
                        <TableCell align='left'>Actions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.currentData().map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="left">
                                    <img src={row.thumb} alt={row.destination} height='50px' width='100px' />

                                </TableCell>
                                <TableCell align="left">
                                    {row.destination}
                                </TableCell>
                                <TableCell align="left">
                                    {row.country}
                                </TableCell>
                                <TableCell align="left">
                                    <Rating name="half-rating-read" defaultValue={row.star} precision={0.5} readOnly />

                                </TableCell>
                                <TableCell align="left">
                                    $ {row.cost}
                                </TableCell>
                                <TableCell align="left">
                                    <Tooltip title='Delete'>
                                        <DeleteIcon className='primary-text cursor-pointer' />
                                    </Tooltip>
                                    <Tooltip title='Edit'>
                                        <EditIcon className='primary-text cursor-pointer' />
                                    </Tooltip>
                                    
                                </TableCell>
                            </TableRow>
                        ))}


                </TableBody>
                <TableFooter>

                    <TableRow>
                        <TableCell colSpan={12}>
                            <Pagination
                                classes={{ ul: classes.ul }}
                                count={data.maxPage}
                                page={defaultPage}
                                onChange={handleOnChangePage}
                                variant="outlined"
                                shape="rounded" />
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={12}>
                            <TextField
                                size='small'
                                id="outlined-select-currency"
                                select
                                label="Rows"
                                value={rowsPerPage}
                                onChange={handleChange}
                            >
                                {rows.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {rows.indexOf(option)===3 ? 'All' : option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </TableCell>

                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}


export default Places;