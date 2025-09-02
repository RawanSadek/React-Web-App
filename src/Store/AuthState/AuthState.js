import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand'

export const useStore = create((set) => ({
    loginData: null,
    getLoginData: () => {
    const token = localStorage.getItem("token");
    const decodedData = jwtDecode(token);
    set({ loginData: decodedData });
  },
  logout: () => {
    set({ loginData: null });
    localStorage.removeItem('token');
  }
}))
