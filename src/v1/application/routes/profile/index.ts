import { Router, Request, Response } from "express"
import { getAllUsers, saveNewUser } from "../../services/user/index"

const userRouter = Router()

userRouter
  .route("/")
  .get(async (_: Request, res: Response) => {
    const results = await getAllUsers().catch((err) => {
      console.error(err)
      return null
    })

    if (!results) return res.status(500).json("errorAPIGetAllUsers")

    return res.status(200).json(results)
  })
  .post(async (req: Request, res: Response) => {
    const { username, email, descrption, picture } = req.body

    const result = await saveNewUser(username, email, descrption, picture).catch((err) => {
      console.error(err)
      return null
    })

    if (!result) return res.status(500).json("errorAPIUserCreation")

    return res.status(200).json(result)
  })

export default userRouter
