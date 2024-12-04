import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import seniorImage from './assets/seniorsexcersing.png';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';  // Import your AWS configuration

// Ensure AWS Amplify is configured
Amplify.configure(awsmobile);

export default function AuthenticatorWrapper({ children }) {
  return (
    <div>
        <Authenticator socialProviders={['google']}>
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
                            <button onClick={signOut}>Sign Out</button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            )}
        </Authenticator>

        {/* <img
            src={seniorImage}
            style={{ width: "100%", height: "auto", marginTop: "1rem" }}
        /> */}
    </div>
  );
}
