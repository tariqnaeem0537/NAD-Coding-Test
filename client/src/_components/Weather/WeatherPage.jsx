import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';

import { weatherActions } from '../../_actions';



const WeatherPage = () => {

  const weather = useSelector(state => state.weather);
  

  const dispatch = useDispatch();

  const onChangeHandle = (query) => {
    if (query.length > 2) {
      dispatch(weatherActions.getAll(query));
    }
  }

  const onSelection = (item) => {
    dispatch(weatherActions.getByCountryID(item.woeid));
  }
  let weatherRecords = weather.weatherRecords ? weather.weatherRecords?.consolidated_weather : [];
  let countries = weather.countries ? weather.countries : [];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const lastRecord = weatherRecords?.pop();


  const headerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 138px)",
    columnGap: "5px"

  };

  const ItemStyle = {
    display: "grid",
    justifyContent: "center",
    border: "1px solid",
    borderRadius: "5px"
  }


  return (
    <div>
      <div>
        <Autocomplete
          id="free-solo-2-demo"
          disableClearable
          getOptionSelected={(option) => option.title}
          getOptionLabel={(option) => option.title}
          options={countries}
          onChange={(event, value) => onSelection(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search city"
              margin="normal"
              variant="outlined"
              onChange={event => {

                if (event.target.value !== "" || event.target.value !== null) {
                  onChangeHandle(event.target.value);
                }
              }}
              InputProps={{ ...params.InputProps, type: 'search country' }}
            />
          )}
        />
      </div>

      <div>

        <div style={headerStyle}>
          {
            weatherRecords?.map(weather => {
              let day = new Date(weather.applicable_date);
              return (
                <div style={ItemStyle} key={weather.id}>
                  <div>{days[day.getDay()]}</div>
                  <div>Min: {Math.round(weather.min_temp)}°</div>
                  <div>Max: {Math.round(weather.max_temp)}°</div>
                </div>
              );
            })
          }
        </div>




      </div>

    </div>
  );
}

export default WeatherPage;