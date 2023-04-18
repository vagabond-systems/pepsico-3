import React, {Component} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columnHeaders = [
    {field: 'name', headerName: 'Name', width: 500},
    {field: 'lastMonth', headerName: 'Last Month', width: 200},
    {field: 'ytdAverage', headerName: 'Ytd. Average', width: 200},
    {field: 'forcasted', headerName: 'Forcasted', width: 200},
];

const distributors = [
    {name: "Saltyshore Soda Co.", lastMonth: 2455, ytdAverage: 2000, forcasted: 2500},
    {name: "Gerbermin Sips", lastMonth: 500, ytdAverage: 643, forcasted: 455},
    {name: "Wicker's", lastMonth: 7600, ytdAverage: 8600, forcasted: 7000},
    {name: "Tips Taps", lastMonth: 5444553, ytdAverage: 5127384, forcasted: 5495321},
    {name: "Hancho's", lastMonth: 5644, ytdAverage: 5322, forcasted: 5744},
    {name: "Carlsburd", lastMonth: 4321, ytdAverage: 4532, forcasted: 4123},
    {name: "Wholestream", lastMonth: 65432, ytdAverage: 67654, forcasted: 64321},
    {name: "Fairings", lastMonth: 3454, ytdAverage: 2343, forcasted: 4076},
    {name: "National Pour", lastMonth: 20322, ytdAverage: 20319, forcasted: 20321},
];

class DistributorTable extends Component {
    render() {
        return (
            <div style={{height: '80%', width: '100%'}}>
                <DataGrid
                    getRowId={row => row.name}
                    rows={distributors}
                    columns={columnHeaders}
                    autoPageSize={true}
                    sx={{
                        borderColor: '#ffd276',
                        color: '#ffd276',
                    }}
                />
            </div>
        );
    }
}

export default DistributorTable;
