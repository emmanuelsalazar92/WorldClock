import TimeComponent from "./TimeComponent";

export function Timezones() {
  return (
    (<div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-6">World Clock</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <TimeComponent IANA="America/Costa_Rica" city="Costa Rica" bg="#FFA500"/> 
        <TimeComponent IANA="America/Lima" city="Perú" bg="#2980B9"/> 
        <TimeComponent IANA="America/Bogota" city="Colombia" bg="#27AE60"/> 
        <TimeComponent IANA="America/Chicago" city="Texas, U.S.A" bg="#D35400"/> 
        <TimeComponent IANA="America/New_York" city="Florida, U.S.A" bg="#7F8C8D"/> 
        <TimeComponent IANA="America/New_York" city="Pensilvania, U.S.A" bg="#C0392B"/> 
        <TimeComponent IANA="America/La_Paz" city="Bolivia" bg="#FF6B6B"/> 
        <TimeComponent IANA="America/Santo_Domingo" city="Republica Dominicana" bg="#9B59B6"/>  
        <TimeComponent IANA="America/Montevideo" city="Uruguay" bg="#E74C3C"/>  
        <TimeComponent IANA="America/Argentina/Buenos_Aires" city="Argentina" bg="#8E44AD"/> 
        <TimeComponent IANA="Europe/Madrid" city="España" bg="#F1C40F"/>  
        <TimeComponent IANA="Asia/Kolkata" city="India" bg="#16A085"/> 
      </div>
    </div>)
  );
}
