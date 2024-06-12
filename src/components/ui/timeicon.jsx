import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const determinePeriod = (hour) => {
    if (hour >= 5 && hour < 15) {
      return 'morning';
    } else if (hour >= 15 && hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

const getIcon = (hour) => {

switch (determinePeriod(hour)) {
    case 'morning':
    return <WbSunnyIcon />;
    case 'afternoon':
    return <WbTwilightIcon />;
    case 'evening':
    return <NightsStayIcon />;
    default:
    return <WbSunnyIcon />;
}
};

export function TimeIcon({hour24}) {
    return (
        <div className="material-icons absolute top-0 right-0 m-2 text-3xl">
        {getIcon(hour24)}
      </div>
    );
}
