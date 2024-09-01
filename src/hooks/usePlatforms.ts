
import useData from "./useData";

  interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatforms=(selectedPlatform: Platform | null)=> useData<Platform>('/platforms/lists/parents')
export default usePlatforms;