I am excited to share that I have successfully completed the AI Journal project as part of my learning journey with Frontend Masters. This project was a core component of the course taught by Scott Moss. Throughout the course, I gained hands-on experience and applied the concepts to develop this project independently, leveraging the knowledge and skills acquired during the course.

Below are the instructions how you can run it.

### Create a new Next.js Project

```bash
npx create-next-app@13.4.5 mood
npm run dev
```

### Install Clerk

Clerk is the third-party authentication provider for the application

```bash
npm i @clerk/nextjs
```

**Add Clerk secrets to .env.local**

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/journal
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/new-user
```

### NeonDB postgresql Database

1. Create a [neon Database](https://neon.tech/)
2. Install [neonctl CLI](https://neon.tech/docs/reference/neon-cli)
3. Use the CLI to connect to the DB: `neonctl auth `
4. Create a `dev` database branch: `neonctl branches create --name {branch-name} `
5. Start the connection for help :'neonctl help'

### Prisma ORM

1. Install Prisma Client: `npm i @prisma/client`
2. Install Prisma as dev dependency: `npm i prisma --save-dev`
3. Initialize Prisma: `npx prisma init`

### OpenAI API Account Setup

1. Create an [openai.com](https://openai.com/) account
2. Select the `API` App.
3. Create an [API Key](https://platform.openai.com/account/api-keys)
4. Copy/Paste the key into your into `.env.local` using the variable `OPENAI_API_KEY`
