import React from 'react'
import { Icon } from '@iconify/react'


export const Panel: React.FC<{className?:string}> = ({className}:{className?: string}) => {
    return (
        <div className={className}>
            <div>
                <button className="p-0" onClick={()=>{console.log("undo")}}><Icon icon="eos-icons:bubble-loading" fontSize={24} /></button>
            </div>
        </div>
    )
}
