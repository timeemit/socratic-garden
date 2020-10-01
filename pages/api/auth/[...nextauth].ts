import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  database: process.env.DATABASE_URL,
  secret: process.env.AUTH_SECRET,
  session: { 
    jwt: {
      secret: process.env.JWT_SECRET,
      encryption: true,
    },
  },
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Providers.Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // Providers.LinkedIn({
    //   clientId: process.env.LINKEDIN_ID,
    //   clientSecret: process.env.LINKEDIN_SECRET,
    // }),
  ],
}

if (process.env.ENVIRONMENT == "local") {
  options.providers.push(Providers.Credentials({
    name: 'Dev Super Powers',
    credentials: { },
    authorize: async (credentials) => {
      return Promise.resolve({ id: 0, name: "dev", email: "dev@socratic.garden" });
    }
  }));
}
export default (req, res) => NextAuth(req, res, options);
