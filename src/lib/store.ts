import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface Project {
  id: string
  title: string
  category: string
  role: string
  period: string
  description: string
  impact: string
  technologies: string[]
  image: string
  link?: string
  hasHeroModal: boolean
  markdownFile?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  status: string
  description: string
  technologies: string[]
  hasHeroModal: boolean
  markdownFile?: string
}

export interface ProjectData {
  projects: Project[]
  experiences: Experience[]
}

interface ProjectStore {
  // Estado
  projects: Project[]
  experiences: Experience[]
  selectedProject: Project | null
  selectedExperience: Experience | null
  isLoading: boolean
  error: string | null
  
  // Ações
  setProjects: (projects: Project[]) => void
  setExperiences: (experiences: Experience[]) => void
  setSelectedProject: (project: Project | null) => void
  setSelectedExperience: (experience: Experience | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // Getters
  getProjectById: (id: string) => Project | undefined
  getExperienceById: (id: string) => Experience | undefined
  getProjectsWithHeroModal: () => Project[]
  getExperiencesWithHeroModal: () => Experience[]
  
  // Ações de dados
  loadProjectData: () => Promise<void>
  loadMarkdownContent: (markdownFile: string) => Promise<string>
}

export const useProjectStore = create<ProjectStore>()(
  devtools(
    (set, get) => ({
      // Estado inicial
      projects: [],
      experiences: [],
      selectedProject: null,
      selectedExperience: null,
      isLoading: false,
      error: null,

      // Ações básicas
      setProjects: (projects) => set({ projects }),
      setExperiences: (experiences) => set({ experiences }),
      setSelectedProject: (project) => set({ selectedProject: project }),
      setSelectedExperience: (experience) => set({ selectedExperience: experience }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),

      // Getters
      getProjectById: (id) => {
        const { projects } = get()
        return projects.find(project => project.id === id)
      },

      getExperienceById: (id) => {
        const { experiences } = get()
        return experiences.find(experience => experience.id === id)
      },

      getProjectsWithHeroModal: () => {
        const { projects } = get()
        return projects.filter(project => project.hasHeroModal)
      },

      getExperiencesWithHeroModal: () => {
        const { experiences } = get()
        return experiences.filter(experience => experience.hasHeroModal)
      },

      // Carregar dados dos projetos
      loadProjectData: async () => {
        const { projects, isLoading } = get()
        
        // Evitar carregar múltiplas vezes se já tiver dados ou estiver carregando
        if (projects.length > 0 || isLoading) {
          return
        }
        
        set({ isLoading: true, error: null })
        
        try {
          const response = await fetch('/data/projects.json')
          if (!response.ok) {
            throw new Error('Falha ao carregar dados dos projetos')
          }
          
          const data: ProjectData = await response.json()
          set({ 
            projects: data.projects, 
            experiences: data.experiences,
            isLoading: false 
          })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Erro desconhecido',
            isLoading: false 
          })
        }
      },

      // Carregar conteúdo markdown
      loadMarkdownContent: async (markdownFile: string) => {
        try {
          const response = await fetch(`/data/markdown/${markdownFile}`)
          if (!response.ok) {
            throw new Error('Falha ao carregar conteúdo markdown')
          }
          return await response.text()
        } catch (error) {
          throw new Error(`Erro ao carregar ${markdownFile}: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
        }
      }
    }),
    {
      name: 'project-store',
    }
  )
)
