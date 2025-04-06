import { useEffect, useState } from "react";
import './category-search.scss';
import CustomCheckbox from "@/components/lib/checkbox/checkbox";
import { GetMerchantDataModel, CheckedState } from "@/domain/models/getMerchant.model";
import { digitalHubRepository } from "@/data/repositories/DigitalHubRepository";

const CategorySearch = () => {
    const [inputSearch, setinputSearch] = useState<string>('');
    const [getMerchant, setGetmerchant] = useState<GetMerchantDataModel[]>([]);

    const [checkedState, setCheckedState] = useState<CheckedState>({});
    
    useEffect(() => {
          featchMerchant();
    }, [getMerchant]);

    useEffect(() => {
        console.log(checkedState);    
    }, [checkedState]);

    const featchMerchant = async () => {
        try {
          const items = await digitalHubRepository.GetMerchant();
          setGetmerchant(items);

          initiateCheckbox();
        } catch {
    
        }
    }

    const initiateCheckbox = () => {
        const initialState: CheckedState = {};

        getMerchant.forEach((data, index) => {
          initialState[index] = false;
        });

        setCheckedState(initialState);
    }

    const handleCheckboxChange = (index: number) => {
        setCheckedState(prevState => ({
          ...prevState,
          [index]: !prevState[index]
        }));
    };

    return(
        <>
            <div className="search-feat">
                <label htmlFor="search-category">Cari Nama Merchant</label>
                <input type="text" id='search-category' placeholder='Contoh: Maxtream' value={inputSearch}
                onChange={(e) => setinputSearch(e.target.value)} />
                <img src="/assets/icons/search.svg" width={24} height={24} alt="search" />
            </div>

            <div className="checkbox-filter">
                {checkedState && Object.keys(checkedState).length > 0 ? (getMerchant.map((data, index) => (  
                    <div className="group" key={index}>
                        <CustomCheckbox
                        checked={checkedState[index]}
                        onChange={() => handleCheckboxChange(index)}
                        />
                        <label className="label">{data.name}</label>
                    </div>
                ))
                ) : (
                    <div>Loading checkboxes...</div> 
                )}
            </div>
        </>
    )
}

export default CategorySearch;