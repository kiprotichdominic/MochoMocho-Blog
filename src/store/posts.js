import create from 'zustand';

const usePostStore = create((set) => ({
    data: [],
    fetch: async (url) => {
        const response = await fetch(url)
        set({ data: await response.json() })
    },
}))


export default usePostStore
