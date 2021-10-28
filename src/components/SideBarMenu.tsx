import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types.d";
import { classNames } from "../utils/clases";
import { BeakerIcon, MenuIcon  } from "@heroicons/react/solid";
import { SideBarMenuCardView } from "./SideBarMenuCardview ";
import { SideBarMenuItemView } from "./SideBarMenuItemView";

interface SideBarMenuProps{
    items: SideBarMenuItem[];
    card:  SideBarMenuCard;
}

export function SideBarMenu({ items  ,card }:SideBarMenuProps){
    const [isOpen,setIsOpen] = useState<boolean>(true);
    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(
        <div className={classNames('SideBarMenu',isOpen?'expanded':'collapsed')}>
        
            <div className = "menuButton">
                <button className="hambugerButton" onClick={handleClick}>
                    <MenuIcon />
                    <p>a</p>
                </button>
                <SideBarMenuCardView card ={card} isOpen={isOpen}/>
                {
                    items.map(item =>(
                        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
                    ))
                }
            </div>
        
        </div>
    );
}