import { useCookies } from "react-cookie";

export default function Account() {
  const [cookie] = useCookies(["access_token"]);

  return (
    <div>
      {cookie.access_token ? (
        <h1>Hello {localStorage.getItem("currentUser")}</h1>
      ) : (
        <h1>You Are not logged In! Kindly Login to get access!</h1>
      )}
    </div>
  );
}
