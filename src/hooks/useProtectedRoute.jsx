import { useAuth } from '../components/AuthContext.jsx';

function useProtectedRoute(ProtectedComponent, RedirectToComponent) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return ProtectedComponent;
    } else {
        return RedirectToComponent;
    }
}

export default useProtectedRoute;
