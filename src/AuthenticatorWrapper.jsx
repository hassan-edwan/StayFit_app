import { useState, useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json"

Amplify.configure(outputs)
const client = generateClient({
  authMode: "userPool",
});

export default function AuthenticatorWrapper({ children }) {
  const [userprofiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  return (
    <div>
      <Authenticator socialProviders={["google"]}>
        {({ signOut, user }) => (
          <div>
            {/* Show this header only when user is NOT authenticated */}
            {!user && (
              <header style={{ textAlign: "center", padding: "1rem" }}>
                <h1>Welcome to StayFIT! Let’s create a plan just for you.</h1>
              </header>
            )}

            {/* Show the child components (App) only when authenticated */}
            {user ? (
              <div>
                {children}
                {/* <button onClick={signOut}>Sign Out</button> */}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </Authenticator>
    </div>
  );
}
