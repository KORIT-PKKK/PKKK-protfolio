import { useNavigate } from "react-router-dom"
import { useRecoilState} from "recoil";
import Cookies from "js-cookie";
import { authenticationState } from "../../store/atoms/auth/AuthAtom";

const SignInRoute = ({ path, element }) => {
    const navigate = useNavigate();
    const [ authState, setAuthState ] = useRecoilState(authenticationState);
    // const [ loginUser, setLoginUser ] = useRecoilState(loginUserState);

    // const authenticated = useMutation(async () => {
    //     const refreshInfo = {
    //         "username" : loginUser.username,
    //         "refreshToken" :  Cookies.get('refreshToken')
    //     }
        
    //     try {
    //         const response = await axios.post("http://192.168.2.18:8080/api/auth/refresh", refreshInfo);
    //         Cookies.set('accessToken', response.data.accessToken, { expires: 1 / 24 });
    //         setAuthState(true);
    //         return response;
    //     } catch(error) {
    //         setAuthState(false);
    //         return error;
    //     }
    // }, {
    //     enable: !Cookies.get("accessToken")
    // });
    // useEffect(() => {
    //     authenticated.mutate();
    // }, [])
    
    // if(authenticated.isLoading) {
    //     return <></>;
    // }

    const rtk = Cookies.get("refreshToken");
    if (rtk == null){
        console.log("rtk null");
        console.log(authState);
    }

    const authenticatedPaths = ["/userSetting", "/userUpdate", "/postWriting"]
    const authPath = "/auth"

    if(!authState && authenticatedPaths.some(authenticatedPath => path.startsWith(authenticatedPath))) {
        navigate("/auth/login");
    }

    if(authState && path.startsWith(authPath)) {
        navigate("/");
    }
    
    return element;
}

export default SignInRoute;