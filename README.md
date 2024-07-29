Here's the updated README with the addition of setting up environment variables before starting the project:

---

# Life Ledger Backend

Welcome to the Life Ledger backend! Follow the steps below to get started.

## How to Start

### Step 1: Install MongoDB

1. **Add MongoDB Tap:**

   ```bash
   brew tap mongodb/brew
   ```

2. **Update Homebrew:**

   ```bash
   brew update
   ```

3. **Install MongoDB (version 7.0):**

   ```bash
   brew install mongodb-community@7.0
   ```

4. **Run MongoDB as a macOS Service:**

   ```bash
   brew services start mongodb-community@7.0
   ```

### Step 2: Prepare Husky

To prepare Husky for managing Git hooks, run:

```bash
npm run prepare
```

### Step 3: Install Packages

Install the necessary packages for the project:

```bash
npm install
```

### Step 4: Set Up Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```plaintext
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=mongodb://localhost:27017/your-database-name
PORT=3000
```

Replace `your-database-name` with the name of your MongoDB database.

### Step 5: Start the Project

Start the development server:

```bash
npm run dev
```

That's it! Your Life Ledger backend should now be up and running.
