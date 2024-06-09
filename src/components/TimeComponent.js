'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContent, Card } from "@/components/ui/card"


const TimeComponent = () => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://clock-api-two.vercel.app/current-time?timeZone=America/Costa_Rica', {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setTimeData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Current Time in Amsterdam</h1>
      {timeData && (
        <div>
{/*           <p>Year: {timeData.year}</p>
          <p>Month: {timeData.month}</p>
          <p>Day: {timeData.day}</p>
          <p>Hour: {timeData.hour}</p>
          <p>Minute: {timeData.minute}</p>
          <p>Seconds: {timeData.seconds}</p>
          <p>Milliseconds: {timeData.milliSeconds}</p>
          <p>DateTime: {timeData.dateTime}</p>
          <p>Date: {timeData.date}</p>
          <p>Time: {timeData.time}</p>
          <p>TimeZone: {timeData.timeZone}</p>
          <p>DayOfWeek: {timeData.dayOfWeek}</p>
          <p>DST Active: {timeData.dstActive ? 'Yes' : 'No'}</p> */}
                  <Card className="bg-[#FF6B6B] text-white">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold">{timeData.time}</div>
          <div className="text-sm mt-2">{timeData.timeZone}</div>
          <div className="text-sm mt-1">{timeData.date}</div>
          </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TimeComponent;
