import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import seniorImage from './assets/seniorsexcersing 1.png';


export default function AuthenticatorWrapper({ children }) {
    return (
      <div>
          <header style={{ textAlign: "center", padding: "1rem" }}>
              <h1>Welcome to StayFIT! Let’s create a plan just for you.</h1>
          </header>
  
          <Authenticator socialProviders={['google']}>
              {({ signOut, user }) => (
                  <div>
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
  
          <img
              src={seniorImage}
              style={{ width: "100%", height: "auto", marginTop: "1rem" }}
          />
      </div>
    );
  }