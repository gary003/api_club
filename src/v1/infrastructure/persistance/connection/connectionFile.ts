import { DataSourceOptions, QueryRunner, DataSource } from "typeorm"
import { v4 as uuidv4 } from "uuid"

export type transactionQueryRunnerType = QueryRunner

export const connectionDB = async (): Promise<DataSource> => {
  const connectionOptions: DataSourceOptions = {
    name: uuidv4(),
    type: process.env.DB_DRIVER,
    host: "bdhanpvrxc2eglowfksl-mysql.services.clever-cloud.com",
    port: 3306,
    username: "uou34iakpdpzp5ru",
    password: "77GqO0vl9OF46m9XhZKj",
    database: "bdhanpvrxc2eglowfksl",
    entities: [__dirname + "/../**/entity.*s"],
    synchronize: false,
  } as DataSourceOptions

  const connection: DataSource = new DataSource(connectionOptions)

  await connection.initialize()

  return connection
}
