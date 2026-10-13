# Setup Instructions

## Quick Start

Follow these steps to get Vibe Exchange running on your local machine.

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="replace-with-a-long-random-string"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

**Important:** `JWT_SECRET` is required. The app has no built-in fallback, and token functions throw if it is missing. Generate one with `openssl rand -base64 32`. Never commit your `.env` file.

`file:./dev.db` is resolved relative to `prisma/schema.prisma`, so the SQLite file is created at `prisma/dev.db`. It is git-ignored.

### 3. Initialize Database

Run the following commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Create the local SQLite database (prisma/dev.db) from the schema
npx prisma db push
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app running!

## Database Management

### View Database

To inspect your database visually:

```bash
npx prisma studio
```

This will open Prisma Studio at [http://localhost:5555](http://localhost:5555)

### Reset Database

If you need to reset your database:

```bash
npx prisma db push --force-reset
```

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## Environment Setup

The app uses SQLite by default for development. For production, you may want to use:
- PostgreSQL
- MySQL
- MongoDB

Update the `datasource` in `prisma/schema.prisma` accordingly.

## Additional Setup

### Cloudinary (Optional)

If you want to enable image uploads, set up Cloudinary and add to `.env`:

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Email Service (Optional)

For password recovery and notifications, set up an email service provider.

## Troubleshooting

### Database Issues

```bash
# If you see database errors
npx prisma db push --force-reset
npx prisma generate
```

### Port Already in Use

```bash
# Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Clear Next.js Cache

```bash
rm -rf .next
npm run dev
```

## Need Help?

Check out the [README.md](README.md) for more information about the project.

