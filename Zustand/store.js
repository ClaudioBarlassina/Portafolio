import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { texts } from '../src/Data/texts'

export const useStore = create(
  devtools((set) => ({
    lang: 'es',
    t: texts.es,

    setlang: (lang) => set({ lang, t: texts[lang] }),
  }))
)
