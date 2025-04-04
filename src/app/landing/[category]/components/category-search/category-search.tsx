import { useState } from "react";
import './category-search.scss';

const CategorySearch = () => {
    const [inputSearch, setinputSearch] = useState<string>('');
    return(
        <>
            <div className="search-feat">
                <label htmlFor="search-category">Cari Nama Merchant</label>
                <input type="text" id='search-category' placeholder='Contoh: Maxtream' value={inputSearch}
                onChange={(e) => setinputSearch(e.target.value)} />
                <img src="/assets/icons/search.svg" width={24} height={24} alt="search" />
            </div>
        </>
    )
}

export default CategorySearch;