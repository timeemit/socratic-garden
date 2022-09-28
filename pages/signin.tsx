// @format
import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

const onClickSignIn = (e) => signIn(e);
const onClickSignOut = (e) => signOut(e);

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {loading && <>Loading...</>}
      {!loading && !session && (
        <>
          Not signed in <br />
          <button className="pure-button" onClick={onClickSignIn}>
            Sign in
          </button>
        </>
      )}
      {!loading && session && (
        <>
          Signed in as {session.user.email} <br />
          <pre>{JSON.stringify(session.user)}</pre>
          <button className="pure-button" onClick={onClickSignOut}>
            Sign out
          </button>
        </>
      )}
    </>
  );
}
