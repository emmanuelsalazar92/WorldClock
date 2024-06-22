import { Timezones } from "@/components/timezones";
import { WeatherTimeZone } from "@/components/weather-time-zone";

export default function Home() {
  console.log("serverAPIdsdsdsa");
  const serverAPI = process.env.NEXT_PUBLIC_SERVER_API;
  console.log(serverAPI);

  return (
    <dev>

    <WeatherTimeZone/>
    </dev>
  );
}
