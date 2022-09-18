module.exports = {
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test_db',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  logging: false,
  synchronize: false,
  name: 'default',
  cli: {
    migrationDir: 'src/migrations',
  },
};
