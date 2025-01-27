"use client"
import React from 'react'
import { Panel } from './panel'
import "../style.css"

export const PDFViewer: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Panel className='panel' />
        </div>
    )
}