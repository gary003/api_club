import { connectionDB } from "../connection/connectionFile"
import { Profile } from "./entity"

export const getAllUsersDB = async (): Promise<Profile[]> => {
  const connection = await connectionDB()

  const ProfileRepository = connection.getRepository(Profile)

  const result = await ProfileRepository.createQueryBuilder("profile")
    .getMany()
    .catch((err) => {
      console.log(err)
      return null
    })

  await connection.destroy()

  if (!result) throw new Error("Impossible to retreive any user")

  // logger.debug(JSON.stringify(result))

  return result as Profile[]
}

export const saveNewUserDB = async (username: string, email: string, description: string, picture: string): Promise<Profile> => {
  const newUser = new Profile()
  newUser.username = username
  newUser.email = email
  newUser.description = description
  newUser.picture = picture

  return newUser
}

export const deleteUserByIdDB = async (userId: string): Promise<boolean> => {
  const connection = await connectionDB()

  const ProfileRepository = connection.getRepository(Profile)

  const deletedUser = await ProfileRepository.delete(userId).catch((err) => {
    return null
  })

  if (!deletedUser || deletedUser.affected === 0) {
    await connection.destroy()
    throw new Error("Impossible to delete the user in DB (step : 2)")
  }

  await connection.destroy()

  return true
}
