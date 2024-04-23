import { connectionDB } from "../connection/connectionFile"
import { Media } from "./entity"

export const getAllMediaDB = async (mediaId: string) => {
  const connection = await connectionDB()

  const MediaRepository = connection.getRepository(Media)

  const media: Media[] | void | null = await MediaRepository.find().catch((err) => console.error(err))

  await connection.destroy()

  if (!media) throw new Error("Impossible to found the requested wallet")

  return media
}
