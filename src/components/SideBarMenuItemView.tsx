import { SideBarMenuItem } from "../types/types.d";
import { classNames } from "../utils/clases";

interface SideBarMenuCardViewProps{
    item : SideBarMenuItem;
    isOpen: boolean
}

export  function SideBarMenuItemView({item , isOpen} : SideBarMenuCardViewProps){
    return <div className="SidebarMenuItem"> 
                <a href={item.url}>
                    <div className={classNames('ItemContent',isOpen? '' :'collapsed')}>
                        <div className="icon">
                            <item.icon size="32"/>
                        </div>
                        <span className="label">{item.label}</span>
                    </div>
                </a>
                {
                    isOpen?<div className="tooltip">{item.label}</div> : ""
                }
            </div>
}