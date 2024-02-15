import { ReactNode, useEffect } from "react";
import useAppStore from "../store/store";
import useAutomaticLogin from "../hooks/useAutomaticLogin";
import ROUTES from "../consts/routes";
import { auth } from "../services/authService";

interface AuthRouteProps {
  children: ReactNode;
  redirectWhenSuccess?: string;
  defaultRedirectWhenError?: boolean;
  showContent?: boolean;
  persistant?: boolean;
}

const AuthRoute = ({
  children,
  redirectWhenSuccess = undefined,
  defaultRedirectWhenError = true,
  showContent = false,
  persistant = false,
}: AuthRouteProps) => {
  const isAuth = useAppStore((state) => state.isAuth);
  const { mutate } = useAutomaticLogin({
    fetchFn: () => auth(),
    redirectWhenError: defaultRedirectWhenError ? ROUTES.AUTH.LOGIN : undefined,
    redirectWhenSuccess: redirectWhenSuccess,
  });

  useEffect(() => {
    if (!isAuth || persistant) {
      mutate({});
    }
  }, [isAuth, mutate, persistant]);

  if (showContent) return children;
  return <>{isAuth && children}</>;
};
export default AuthRoute;
