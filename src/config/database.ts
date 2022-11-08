import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeorm_nodedb",
  entities: [],
  synchronize: true,
  logging: false,
});

const dbConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection succeessful");
  } catch (err) {
    console.log("Database connection failure", err);
    process.exit();
  }
};

export { dbConnection };
