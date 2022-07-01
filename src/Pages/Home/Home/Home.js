import DataTable from "../DataTable/DataTable";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <DataTable></DataTable>
        </div>
    );
};

export default Home;