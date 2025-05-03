import { useEffect, useState } from "react";
import './SearchCategoryComponent.scss';
import CustomCheckbox from "@/components/lib/checkbox/checkbox";
import { GetMerchantDataModel, CheckedState } from "@/domain/models/getMerchant.model";
import { digitalHubRepository } from "@/data/repositories/DigitalHubRepository";
import useCurrencyInput, { cleanCurrency } from "@/hook/useCurrencyInput";
import RadioButton from "@/components/lib/radiobutton/RadioButton";
import { GetProductByCategoryDto } from "@/domain/models/getProductByCategiry";

type Props = {
    onDataReceived: (data: GetProductByCategoryDto) => void;
};

const SearchCategoryComponent: React.FC<Props> = ({ onDataReceived }) => {
    const { values, handleChange } = useCurrencyInput({
        price1: '',
        price2: ''
    });
    
    const [inputSearch, setinputSearch] = useState<string>('');
    const [getMerchant, setGetmerchant] = useState<GetMerchantDataModel[]>([]);
    const [merchatShow, setMerchatShow] = useState<GetMerchantDataModel[]>([]);
    const [checkedState, setCheckedState] = useState<CheckedState>({});
    const [getChakedId, setGetChakedId] = useState<string[]>([]);
    const [selectedOrdering, setSelectedOrdering] = useState('1');
    const [isExpanded, setIsExpanded] = useState(true);
    
    useEffect(() => {
        // sendDataToParent();
    }, [inputSearch]);

    useEffect(() => {
          featchMerchant();
          setMerchatShow(getMerchant);
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

    const sendDataToParent = () => {
        const data: GetProductByCategoryDto = {
            search: inputSearch,
            merchant: getChakedId,
            lowest: cleanCurrency(values.price1),
            highest: cleanCurrency(values.price2),
            ordering: selectedOrdering
        }

        onDataReceived(data);
    };

    const toggleView = () => {
        if (isExpanded) {
          setMerchatShow(getMerchant.slice(0, 5));
        } else {
          setMerchatShow(getMerchant);
        }
        setIsExpanded(!isExpanded);
      };

    return(
        
        <div className="reusable-filters">
            <div className="reusable-filters-first">
                <div className="search-feat">
                    <label htmlFor="search-category">Cari Nama Merchant</label>
                    <input type="text" id='search-category' placeholder='Contoh: Maxtream' value={inputSearch}
                    onChange={(e) => setinputSearch(e.target.value)} />
                    <img src="/assets/icons/search.svg" width={24} height={24} alt="search" />
                </div>

                <div className="checkbox-filter">
                    {checkedState && Object.keys(checkedState).length > 0 ? (merchatShow.map((data, index) => (  
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

                    <button className="flex items-center mt-4" onClick={() => toggleView()}>
                        <span className="text-f-14 text-secondary-rzaBlue mr-2 font-poppins-bold">Lihat Lebih Sedikit</span>
                        
                        <img src={`/assets/icons/${isExpanded ? 'chevron-up.svg' : 'chevron-down.svg'}`} width={24} height={24} alt="up" />
                    </button>
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
            </div>

            <div className="reusable-filters-second">
                <div className="ordering-filter">
                    <div className="ordering-filter-title">
                        Urutan
                    </div>
                
                    <div className="ordering-filter-radio">
                        <RadioButton
                            label="Produk Terbaru"
                            name="exampleGroup"
                            checked={selectedOrdering === '1'}
                            onChange={() => handleRadioChange('1')}
                        />
                        <RadioButton
                            label="Harga Tertinggi"
                            name="exampleGroup"
                            checked={selectedOrdering === '2'}
                            onChange={() => handleRadioChange('2')}
                        />
                        <RadioButton
                            label="Harga Terendah"
                            name="exampleGroup"
                            checked={selectedOrdering === '3'}
                            onChange={() => handleRadioChange('3')}
                        />
                    </div>
                </div>
            </div>

            <div className="submit-area">
                <button className="btn-primary-submit" onClick={sendDataToParent}>
                    Terapkan
                </button>
                <div className="btn-secondary-submit">
                    Nanti Saja
                </div>
            </div>
        </div>
        
    )
}

export default SearchCategoryComponent;