export function checkTokenExpiry(): boolean {
    if (typeof window === "undefined") return true; 
  
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");
  
    if (token && expiry) {
      const now = Date.now();
      if (now > Number(expiry)) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiry");
        return true; 
      }
      return false; 
    }
  
    return true; 
  }
  
  