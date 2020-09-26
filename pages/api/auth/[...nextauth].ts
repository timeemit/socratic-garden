import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

let options = {
  database: process.env.DATABASE_URL,
  secret: process.env.AUTH_SECRET,
  session: { 
    jwt: {
      secret: process.env.JWT_SECRET,
      encryption: true,
    },
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Providers.LinkedIn({
    //   clientId: process.env.LINKEDIN_ID,
    //   clientSecret: process.env.LINKEDIN_SECRET,
    // }),
  ],
}

if ("ADMIN_USERNAME" in process.env) {
  options.providers.push(Providers.Credentials({
    name: 'Socratic Garden',
    credentials: {
      email: { label: "Email", type: "email", placeholder: "me@example.com" },
      password: {  label: "Password", type: "password" }
    },
    authorize: async (credentials) => {
      return Promise.resolve({ id: 0, name: "Liam Norris", email: "liam@socratic.garden" });
    }
  }));
}
export default (req, res) => NextAuth(req, res, options);
