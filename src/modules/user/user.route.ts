import express from 'express';
import { UserController } from './user.controller';
const router = express.Router()

router.post("/", UserController.createUser)
router.get("/", UserController.getAllUsersFromDB)
router.get("/:id", UserController.getSingleUserFromDB)
router.patch("/:id",UserController.updateUser)
router.delete("/:id",UserController.deleteUser)

export const UserRouter = router 