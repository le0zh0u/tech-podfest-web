import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface NavLink {
  label: string
  href: string
  isActive: boolean
}

interface AppState {
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
  language: string
  setLanguage: (lang: string) => void
  navLinks: NavLink[]
  updateNavLink: (href: string, isActive: boolean) => void
  // 可以添加更多状态...
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setIsDarkMode: (isDark) => set({ isDarkMode: isDark }),
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      navLinks: [
        { label: 'Home', href: '/', isActive: true },
        { label: 'TPF25', href: '/tpf25', isActive: false },
        { label: 'TPF23', href: 'https://podfest.tech', isActive: false },
        { label: 'TPF22', href: '/tpf22', isActive: false },
      ],
      updateNavLink: (href, isActive) =>
        set((state) => ({
          navLinks: state.navLinks.map((link) =>
            link.href === href ? { ...link, isActive } : link,
          ),
        })),
    }),
    {
      name: 'app-storage',
      version: 1,
      partialize: (state) => ({ isDarkMode: state.isDarkMode }),
    },
  ),
)
