import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react'

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */

const Profile = () => {
  const {
    isLoading,
    logout,
    user
  } = useAuth0();

  const handleClick = () => {
    logout({ returnTo: window.location.origin })
  }

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div class='max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6'>
      <img src={user.picture} class='rounded-full mx-auto mb-4' />
      <h1 class='font-bold text-2xl mb-2'>{user.name}</h1>
      <p class='mb-5'>{user.email}</p>
      <button
        onClick={handleClick}
        class='primary-c rounded text-white text-xl p-1 pl-3 pr-3'
      >Logout
      </button>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
