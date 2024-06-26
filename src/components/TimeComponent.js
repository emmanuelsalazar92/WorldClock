'use client';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getTimeOfDay = (hour) => {
  if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
}

const fetchData = async (IANA) => {
  if (!IANA) {
    throw new Error('timeZone query parameter is required');
  }

  const serverAPI = process.env.NEXT_PUBLIC_SERVER_API;
  const response = await axios.get(`${serverAPI}/current-time`, {
    params: { timeZone: IANA },
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return response.data;
};

const fetchWeatherData = async (coordenates) => {
  if (!coordenates) {
    throw new Error('coordenates query parameter is required');
  }

  const serverAPI = process.env.NEXT_PUBLIC_SERVER_API;
  const response = await axios.get(`${serverAPI}/current-weather`, {
    params: { coordenates },
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const { temp_c, temp_f, condition: { text, icon } } = response.data.current;

  const correctedIcon = icon.startsWith('//') ? `https:${icon}` : icon;

  return { temp_c, temp_f, text, icon: correctedIcon };
};

const fetchAstronomyData = async (coordenates) => {
  if (!coordenates) {
    throw new Error('coordenates query parameter is required');
  }

  const serverAPI = process.env.NEXT_PUBLIC_SERVER_API;
  const response = await axios.get(`${serverAPI}/current-astronomy`, {
    params: { coordenates },
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const { sunrise, sunset, moon_phase } = response.data.astronomy.astro;
  const { region, country} = response.data.location;

  return { region, country, sunrise, sunset, moon_phase };
};

const TimeComponent = ({ IANA, coordenates }) => {
  const [timeData, setTimeData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const [timeData, weatherData, astronomyData] = await Promise.all([
        fetchData(IANA),
        fetchWeatherData(coordenates),
        fetchAstronomyData(coordenates)
      ]);
      setTimeData(timeData);
      setWeatherData(weatherData);
      setAstronomyData(astronomyData);
      setError(null);
    } catch (err) {
      setError(err);
      setTimeData(null);
      setWeatherData(null);
      setAstronomyData(null);
    } finally {
      setLoading(false);
    }
  }, [IANA, coordenates]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <dev>
      {timeData && (
        <div className="bg-[#005a8e] rounded-lg shadow-md">
          <div className="p-4 border-b border-[#0077b6]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">{astronomyData.region} , {astronomyData.country}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xl">{timeData.time}</span>
                <span className="text-sm">{getTimeOfDay(timeData.hour)}</span>
                <span className="text-2xl">
                  {getTimeOfDay(timeData.hour) === "morning"
                    ? "\uD83C\uDF04"
                    : getTimeOfDay(timeData.hour) === "afternoon"
                    ? "\uD83C\uDF1E"
                    : "\uD83C\uDF19"}
                </span>
              </div>
            </div>
            <p className="text-sm">{monthNames[timeData.month - 1]} {timeData.day}, {timeData.year}</p>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold">
                  {weatherData.temp_c}°C
                </p>
                <p className="text-2xl font-bold">{weatherData.temp_f}°F</p>
              </div>
              <span className="text-4xl">
                <img src={weatherData.icon} alt={weatherData.text} className="mt-2" />
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mt-4">
              <div>
                <p>Sunrise: {astronomyData.sunrise}</p>
                <p>Sunset: {astronomyData.sunset}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </dev>
  );
};

TimeComponent.propTypes = {
  IANA: PropTypes.string.isRequired,
  coordenates: PropTypes.string.isRequired,
};

export default TimeComponent;
