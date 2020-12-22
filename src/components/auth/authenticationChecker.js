import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import LoadingScreen from '../auth/SignIn'; 


const locationHelper = locationHelperBuilder({});

export const AllowUserIfAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'AllowUserIfAuthenticated',
    AuthenticatingComponent: LoadingScreen,
    allowRedirectBack: true,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/signIn',
    authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && !auth.isEmpty
});

export const RedirectAuthenticatedUser = connectedRouterRedirect({
    wrapperDisplayName: 'RedirectAuthenticatedUser',
    AuthenticatingComponent: LoadingScreen,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/createProject',
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && auth.isEmpty
});
