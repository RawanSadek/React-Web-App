import { jwtDecode } from 'jwt-decode';
import { useState } from 'react'
import { create } from 'zustand'

// let [loginData, setLoginData] = useState(null);
export const useStore = create((set) => ({
    loginData: null,
    getLoginData: () => {
    const token = localStorage.getItem("token");
    const decodedData = jwtDecode(token);
    set({ loginData: decodedData });
    console.log(loginData)
  },
  logout: () => {
    set({ loginData: null });
    localStorage.removeItem('token');
  }
}))
