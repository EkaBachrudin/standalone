import { useEffect, useState } from "react";
import './category-search.scss';
import CustomCheckbox from "@/components/lib/checkbox/checkbox";
import { GetMerchantDataModel, CheckedState } from "@/domain/models/getMerchant.model";
import { digitalHubRepository } from "@/data/repositories/DigitalHubRepository";
import useCurrencyInput from "@/hook/useCurrencyInput";
import RadioButton from "@/components/lib/radiobutton/RadioButton";

const CategorySearch = () => {
    const { values, handleChange } = useCurrencyInput({
        price1: '',
        price2: ''
    });
    
    const [inputSearch, setinputSearch] = useState<string>('');

    const [getMerchant, setGetmerchant] = useState<GetMerchantDataModel[]>([]);
    const [checkedState, setCheckedState] = useState<CheckedState>({});
    const [getChakedId, setGetChakedId] = useState<string[]>([]);
    const [selectedOrdering, setSelectedOrdering] = useState('option2');
    
    useEffect(() => {
          featchMerchant();
    }, [getMerchant]);

    useEffect(() => {
        getChakedData(checkedState)  
    }, [checkedState]);

    useEffect(() => {
    }, [getChakedId]);

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

    const getChakedData = (checkedState: CheckedState) => {
        let collection: string[] = [];
        Object.entries(checkedState).forEach(([key, value], index) => {
            if(value) collection.push(getMerchant[index].id);
        });

        setGetChakedId(collection);
    }

    const clearPriceFilter = () => {
        handleChange('price1', '');
        handleChange('price2', '');
    }

    const handleRadioChange = (value: string) => {
        setSelectedOrdering(value);
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

            <div className="price-filter">
                <div className="price-filter-head">
                    <div className="title"> Harga </div>
                    <button className="clear" onClick={clearPriceFilter}> Hapus </button>
                </div>

                <div className="input-group-price">
                    <label htmlFor="lowest-price">Terendah</label>

                    <input 
                        id="lowest-price" 
                        value={values.price1} 
                        placeholder="RP | Harga"
                        onChange={e => handleChange('price1', e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className="input-group-price">
                    <label htmlFor="higest-price">Tertinggi</label>

                    <input 
                        id="higest-price" 
                        value={values.price2}
                        placeholder="RP | Harga"
                        onChange={e => handleChange('price2', e.target.value)}
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="ordering-filter">
                <div className="ordering-filter-title">
                    Urutan
                </div>
            
                <div className="ordering-filter-radio">
                    <RadioButton
                        label="Option 1"
                        name="exampleGroup"
                        checked={selectedOrdering === 'option1'}
                        onChange={() => handleRadioChange('option1')}
                    />
                    <RadioButton
                        label="Option 2"
                        name="exampleGroup"
                        checked={selectedOrdering === 'option2'}
                        onChange={() => handleRadioChange('option2')}
                    />
                    <RadioButton
                        label="Option 3"
                        name="exampleGroup"
                        checked={selectedOrdering === 'option3'}
                        onChange={() => handleRadioChange('option3')}
                    />
                </div>
            </div>
        </>
    )
}

export default CategorySearch;