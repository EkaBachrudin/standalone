import { useState, useEffect, useRef } from "react";
import "./styles.scss";
import { MenuItem } from "@/domain/models/menuItem";

interface DropdownMenuProps {
  options: MenuItem;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  return (
    <div ref={dropdownRef} className={`dropdown ${isOpen ? "active" : ""}`} data-dropdown>
      <button className="link" onClick={toggleDropdown}>
        <span>{options.name}</span>
        {options.childs && (
           <img src={'/assets/icons/chevron-' + (isOpen ? 'up.svg' : 'down.svg')} alt="down" />
        )}
      </button>
        {options.childs && (
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            {options?.childs?.map((group, index) => (
              <div key={index}>
                <div className="link">{group.childName}</div>
              </div>
            ))}
          </div>
        )}
      
    </div>
  );
};

export default DropdownMenu;
