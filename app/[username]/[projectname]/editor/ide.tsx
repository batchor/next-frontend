"use client"
import React, { useState, useRef } from 'react'
import { Filetree } from './filetree'
import { CodeMirrorEditor } from './codemirror'
import { PDFViewer } from './pdf'

export const IDE = ({className}:{className?: string}) => {
    const [leftWidth, setLeftWidth] = useState(10)
    const [centerWidth, setCenterWidth] = useState(45)
    const [isDraggingLeft, setIsDraggingLeft] = useState(false)
    const [isDraggingRight, setIsDraggingRight] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingLeft && !isDraggingRight) return
        if (!containerRef.current) return
        const container = containerRef.current
        const containerRect = container.getBoundingClientRect()
        const containerWidth = containerRect.width
        const mouseX = e.clientX - containerRect.left
        const percentageX = (mouseX / containerWidth) * 100

        if (isDraggingLeft) {
            const newLeftWidth = Math.min(Math.max(percentageX, 10), 80)
            const availableWidth = 100 - newLeftWidth
            const ratio = centerWidth / (centerWidth + (100 - leftWidth - centerWidth))
            const newCenterWidth = availableWidth * ratio
        
            setLeftWidth(newLeftWidth)
            setCenterWidth(newCenterWidth)
        } else if (isDraggingRight) {
            // const totalWidth = leftWidth + centerWidth
            const newCenterWidth = Math.min(Math.max(percentageX - leftWidth, 10), 80 - leftWidth)
            setCenterWidth(newCenterWidth)
        }
    }

    const handleMouseUp = () => {
        setIsDraggingLeft(false)
        setIsDraggingRight(false)
    }

    React.useEffect(() => {
        if (isDraggingLeft || isDraggingRight) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDraggingLeft, isDraggingRight])

    return (
        <div className={className}>
            <div 
                ref={containerRef}
                className="flex h-full"
            >
                {/* Filetree */}
                <div style={{ width: `${leftWidth}%` }}>
                    <Filetree />
                </div>

                {/* Left Divider */}
                <div
                    className="w-1 bg-gray-200 hover:bg-blue-400 cursor-col-resize relative group"
                    onMouseDown={() => setIsDraggingLeft(true)}
                >
                    <div className="absolute inset-0 group-hover:bg-blue-200 opacity-50"></div>
                </div>

                <div style={{ width: `${centerWidth}%`}} >
                    <CodeMirrorEditor />
                </div>

                {/* Right Divider */}
                <div
                    className="w-1 bg-gray-200 hover:bg-blue-400 cursor-col-resize relative group"
                    onMouseDown={() => setIsDraggingRight(true)}
                >
                    <div className="absolute inset-0 group-hover:bg-blue-200 opacity-50"></div>
                </div>

                {/* PDF viewer */}
                <div 
                    className="flex-1 bg-blue-300 shadow-md"
                >
                    <PDFViewer />
                </div>
            </div>
        </div>
    )
}
