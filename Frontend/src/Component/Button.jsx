export default function LoginButton() {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const handleLogin = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email&prompt=select_account`;

    window.location.href = url;
  };

  return (
    <button type="button" className="btn btn-link btn-floating mx-1" onClick={handleLogin}>
      <i className="fab fa-google"></i>
    </button>
  );
}
