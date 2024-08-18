## Voidfull Next.js Help Center template

Preview: [nextjs-helpcenter-template.voidfull.com](https://nextjs-helpcenter-template.voidfull.com)

Use this template to quickly get started by creating a Help Center for your own Product / Company using [Voidfull](https://voidfull.com).

## Get started

### Grab team/site token from Voidfull

1. Register an account on [Voidfull](https://voidfull.com).
2. Create a Team
3. Create a Site
4. Create and copy the Token

### One-Click deploy

You can skip the step for setting up locally and deploy it on Railway.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/7NcJhi?referralCode=mittalyashu)

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
