import TimeComponent from "./TimeComponent";

export function WeatherTimeZone() {

  return (
    (<div
      className="w-full min-h-screen bg-gradient-to-b from-[#0077b6] to-[#00a8e8] text-white">
      <header className="bg-[#005a8e] py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold">Weather Clock Portal</h1>
      </header>
      <main
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          <TimeComponent IANA="America/Costa_Rica" city="Costa Rica" bg="#FFA500" coordenates="9.9281,-84.0907"/> 
          <TimeComponent IANA="America/Lima" city="Perú" bg="#2980B9" coordenates="-12.0464,-77.0428"/> 
        <TimeComponent IANA="America/Bogota" city="Colombia" bg="#27AE60" coordenates="4.7110,-74.0721"/> 
 {/*        <TimeComponent IANA="America/Chicago" city="Texas, U.S.A" bg="#D35400" coordenates="30.2672,-97.7431"/> 
        <TimeComponent IANA="America/New_York" city="Florida, U.S.A" bg="#7F8C8D" coordenates="30.4383,-84.2807"/> 
        <TimeComponent IANA="America/New_York" city="Pensilvania, U.S.A" bg="#C0392B" coordenates="40.2732,-76.8867"/> 
        <TimeComponent IANA="America/La_Paz" city="Bolivia" bg="#FF6B6B" coordenates="-16.5000,-68.1500"/> 
        <TimeComponent IANA="America/Santo_Domingo" city="Republica Dominicana" bg="#9B59B6" coordenates="18.4861,-69.9312"/>  
        <TimeComponent IANA="America/Montevideo" city="Uruguay" bg="#E74C3C" coordenates="-34.9011,-56.1645"/>  
        <TimeComponent IANA="America/Argentina/Buenos_Aires" city="Argentina" bg="#8E44AD" coordenates="-34.6037,-58.3816"/> 
        <TimeComponent IANA="Europe/Madrid" city="España" bg="#F1C40F" coordenates="40.4168,-3.7038"/>  
        <TimeComponent IANA="Asia/Kolkata" city="India" bg="#16A085"coordenates="28.6139,77.2090"/>  */}
      </main>
    </div>)
  );
}
