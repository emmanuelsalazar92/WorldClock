'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContent, Card } from "@/components/ui/card"

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const TimeComponent = ({IANA, city, bg}) => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const timeZone = IANA
  
  if (!timeZone) {
      return res.status(400).json({ error: 'timeZone query parameter is required' });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://clock-api-two.vercel.app/current-time?timeZone=${(timeZone)}`, {
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
      {timeData && (
        
        <div>
          <Card className="text-white" style={{backgroundColor: bg}}>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">{timeData.time}</div>
              <div className="text-sm mt-2">{city}</div>
              <div className="text-sm mt-1">{monthNames[timeData.month-1]} {timeData.day}, {timeData.year}</div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TimeComponent;
