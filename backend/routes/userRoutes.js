import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// admin actions
router
  .route("/")
  .post(createUser)
  .get( authenticate, authorizeAdmin, getAllUsers );
  
// user actions
router.route( '/' ).post( createUser );
router.post( '/auth', loginUser );
router.post( '/logout', logoutCurrentUser );

// user profile management
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);
export default router;