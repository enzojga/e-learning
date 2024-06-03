import { AuthenticationResult, EventType, LogLevel, PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "9a037fbe-1f7c-4924-9ec8-0a2379f1a8db",
        authority: "https://login.microsoftonline.com/common",
        knownAuthorities: [],
        cloudDiscoveryMetadata: "",
        redirectUri: "http://localhost:3000/login",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: true,
        clientCapabilities: ["CP1"],
    },
    cache: {
        cacheLocation: "sessionStorage",
        temporaryCacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
        secureCookies: false,
        claimsBasedCachingEnabled: true,
    },
    system: {
        loggerOptions: {
            loggerCallback: (
                level: LogLevel,
                message: string,
                containsPii: boolean
            ): void => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
            piiLoggingEnabled: false,
        },
        windowHashTimeout: 60000,
        iframeHashTimeout: 6000,
        loadFrameTimeout: 0,
        asyncPopups: false,
    },
    telemetry: {
        application: {
            appName: "e-learning",
            appVersion: "1.0.0",
        },
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});
  

export default msalInstance;

export const loginRequest = {
  scopes: ['User.Read']
};
