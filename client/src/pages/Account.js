import { useCookies } from "react-cookie";

export default function Account() {
  const [cookie] = useCookies(["access_token"]);

  return (
    <div className="nContainer">
      {cookie.access_token ? (
        <>
          <h1>Hello {localStorage.getItem("currentUser")}</h1>
          <br />
          <br />
          <h3>Adding More Features soon...</h3>
        </>
      ) : (
        <h1>You Are not logged In! Kindly Login to get access!</h1>
      )}
    </div>
  );
}
