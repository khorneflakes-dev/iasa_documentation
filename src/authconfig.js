import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_z84PYBuOM",
    client_id: "7dhoflet374a7fl6jp6kmnr7n0",
    redirect_uri: "http://localhost:4321/",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "7dhoflet374a7fl6jp6kmnr7n0";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-1z84pybuom.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};