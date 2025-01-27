import React from 'react'
import { Icon } from '@iconify/react'


export const Panel: React.FC<{className?:string}> = ({className}:{className?: string}) => {
    return (
        <div className={className}>
            <div>
                <button className="p-0" onClick={()=>{console.log("undo")}}><Icon icon="material-symbols:undo" fontSize={24} /></button>
                <button className="p-0" onClick={()=>{console.log("undo")}}><Icon icon="material-symbols:redo" fontSize={24} /></button>
                <button className="p-0" onClick={()=>{console.log("undo")}}><Icon icon="material-symbols:bold" fontSize={24} /></button>
                <button className="p-0" onClick={()=>{console.log("undo")}}><Icon icon="majesticons:italic-line" fontSize={23} /></button>
            </div>
        </div>
    )
}
