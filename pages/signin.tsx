import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {loading && <>Loading...</>}
      {!loading && !session && (
        <>
          Not signed in <br />
          <button className="pure-button" onClick={signIn}>
            Sign in
          </button>
        </>
      )}
      {!loading && session && (
        <>
          Signed in as {session.user.email} <br />
          <pre>{JSON.stringify(session.user)}</pre>
          <button className="pure-button" onClick={signOut}>
            Sign out
          </button>
        </>
      )}
    </>
  );
}
