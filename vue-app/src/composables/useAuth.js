export const useAuth = (service) => {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/" + service
}