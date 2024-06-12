'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContent, Card } from "@/components/ui/card";
import { TimeIcon } from "./ui/timeicon";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const TimeComponent = ({ IANA, city, bg }) => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!IANA) {
        setError(new Error('timeZone query parameter is required'));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://clock-api-two.vercel.app/current-time?timeZone=${encodeURIComponent(IANA)}`, {
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
  }, [IANA]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {timeData && (
        <div>
          <Card className="text-white" style={{ backgroundColor: bg }}>
            <TimeIcon hour24={timeData.hour}/>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold">{timeData.time}</div>
              <div className="text-sm mt-2">{city}</div>
              <div className="text-sm mt-1">{monthNames[timeData.month - 1]} {timeData.day}, {timeData.year}</div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TimeComponent;
