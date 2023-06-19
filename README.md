# Configure .env with .env.example

# Install Modules
npm install

# Create Database and schema
---------------------------------------------------------------------------------------------------------------------

# Run Migration
node ace migration:run

# Create Migration
Example: node ace make:migration users

# Run Seed
node ace db:seed

# Create Seed
Example: node ace make:seeder User