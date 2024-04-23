import { Profile } from "../../../infrastructure/persistance/profile/entity"
import { getAllUsersDB, saveNewUserDB, deleteUserByIdDB } from "../../../infrastructure/persistance/profile"

export const getAllUsers = async (): Promise<Profile[]> => {
  const allUsers = await getAllUsersDB().catch((err: any) => {
    console.log(err)
    return null
  })

  if (!allUsers) throw new Error(JSON.stringify("err - gatAll"))

  return allUsers as unknown as []
}

export const saveNewUser = async (username: string, email: string, description: string, picture: string): Promise<Profile> => {
  const newUser = await saveNewUserDB(username, email, description, picture).catch((err: any) => {
    console.error(err)
    return null
  })

  if (!newUser) throw new Error(JSON.stringify("ErrorCreatingUser"))

  return newUser as unknown as Profile
}

export const deleteUserById = async (userId: string): Promise<boolean> => {
  const deletedUser: boolean | null = await deleteUserByIdDB(userId).catch((err: any) => {
    console.error(err)
    return null
  })

  if (!deletedUser) throw new Error(JSON.stringify("ErrorDeletingUser"))

  return deletedUser
}

export const feedPagination = async (userId: string): Promise<boolean> => {
  return true
}
