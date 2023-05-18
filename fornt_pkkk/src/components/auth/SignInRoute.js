import { useNavigate } from "react-router-dom"
import { useRecoilState} from "recoil";
import Cookies from "js-cookie";
import { authenticationState } from "../../store/atoms/auth/AuthAtom";

const SignInRoute = ({ path, element }) => {
    const navigate = useNavigate();
    const [ authState, setAuthState ] = useRecoilState(authenticationState);
    const refreshToken = Cookies.get('refreshToken');
    
    const authenticatedPaths = ["/userSetting", "/userUpdate", "/review", "/visit", "/placeFav", "/postFav", "/postWriting"]
    const authPath = "/auth"

    if(refreshToken !== null) {
        setAuthState(true);
    } else {
        setAuthState(false);
    }

    if(!authState && authenticatedPaths.some(authenticatedPath => path.startWith(authenticatedPath))) {
        navigate("/auth/login");
    }

    if(authState && path.startWith(authPath)) {
        navigate("/");
    }
    return element;
}

export default SignInRoute;