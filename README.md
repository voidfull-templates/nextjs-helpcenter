## Voidfull Next.js Help Center template

Preview: [nextjs-helpcenter.onrender.com](https://nextjs-helpcenter.onrender.com/)

Use this template to quickly get started by creating a Help Center for your own Product / Company using [Voidfull](https://voidfull.com).

## Get started

### Grab team/site token from Voidfull

1. Register an account on [Voidfull](https://voidfull.com).
2. Create a Team
3. Create a Site
4. Create and copy the Token

### Setup your local development

You need to clone this repository and install the dependencies:

```bash
# NPM
npm install

# YARN
yarn

# PNPM
pnpm install
```

Rename the `.env.example` file to `.env` and paste the following environment variables.

```env
NEXT_PUBLIC_VOIDFULL_SITE_ID=<your_voidfull_site_id>
NEXT_PUBLIC_VOIDFULL_CONTENT_TOKEN=<your_voidfull_token_id>
```

### Start your app

Run the following command in your terminal

```bash
# NPM
npm run dev

# YARN
yarn dev

# PNPM
pnpm dev
```

Navigate to `http://localhost:3000` to open the site your browser.
