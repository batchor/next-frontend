// reference: https://github.com/uiwjs/react-codemirror
import React, { useRef, useEffect, useState  } from 'react'
import { EditorState, Extension, Compartment  } from '@codemirror/state'
import { basicSetup } from "codemirror"
import { indentWithTab } from "@codemirror/commands"
import { keymap, EditorView } from "@codemirror/view"
import {
    syntaxHighlighting,
    defaultHighlightStyle,
} from '@codemirror/language'
import { oneDark } from '@codemirror/theme-one-dark'
import { useTheme } from 'next-themes'

import { Panel } from './panel'
import "../style.css"


const tex = '\\documentclass{article}\n'.repeat(50)

const editorTheme = new Compartment()


function changeTheme(editor: EditorView, theme: string | undefined) {
    console.log(`Change editor theme to ${theme}.`)
    if (theme === 'dark') {
        editor.dispatch({ effects: editorTheme.reconfigure([oneDark]) })
    } else {
        editor.dispatch({ effects: editorTheme.reconfigure([]) })
    }
}

const extensions: Extension[] = [
    basicSetup,
    editorTheme.of([]),
    keymap.of([indentWithTab]),
    EditorView.contentAttributes.of({ spellcheck: 'true' }),
    EditorView.lineWrapping,
    syntaxHighlighting(defaultHighlightStyle),
]

export const CodeMirrorEditor = () =>{
    const container = useRef<HTMLDivElement>(null)
    const [view, setView] = useState<EditorView | null>(null)
    const { theme } = useTheme()
    const [editorState] = useState<EditorState>(EditorState.create({doc: tex, extensions }))
    useEffect(() => {
        if (container.current && !view) {
            const viewCurrent = new EditorView({
                parent: container.current,
                state: editorState
            })
            setView(viewCurrent)

            return () => {
                viewCurrent.destroy()
            }
        }
    }, [container])

    useEffect(() => {
        if (view) { changeTheme(view, theme) }
    }, [theme])

    return (
        <div className='w-full h-full flex flex-col'>
            <Panel className='panel' />
            <div ref={container} id="editor" className='flex-1 overflow-y-auto'></div>
        </div>
    )
}
