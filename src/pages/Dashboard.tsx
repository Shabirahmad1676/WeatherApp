import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCcw } from "lucide-react";

const Dashboard = () => {
  const {coordinates,error,isLoaded,getLocation} = useGeolocation()
  // console.log(coordinates);
  return (
    <div className="space-y-4">
      {/* favourite cities */}
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCcw />
        </Button>
      </div>
      {/* current and hourly */}
    </div>
  );
};

export default Dashboard;
