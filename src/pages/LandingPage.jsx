import { MoviesGrid } from "../components/MoviesGrid";
import { useDebounce } from "../hooks/useDebounce";
import {useQuery} from "../hooks/useQuery";
import {Footer} from "../components/Footer";



export function LandingPage(){

    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 500)
   
    return ( 
          <div>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
            <Footer></Footer>
          </div> 
    );
}