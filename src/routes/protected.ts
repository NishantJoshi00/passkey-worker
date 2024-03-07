import express from "express";
import { getUserById } from "../file";
import { runLock } from "../system/functions";

const router = express.Router();

// add middleware to check if user is logged in
router.use(async (req, res, next) => {
  if (req.session.loggedInUserId) {
    const user = await getUserById(req.session.loggedInUserId);
    if (user) {
      return next();
    }
  }
  res.status(401).json({ message: "Unauthorized" });
});

router.post("/lock", (req, res) => {
  runLock();
  res.json({ message: "Locked" });
});

router.post("/restart", (req, res) => {
  res.json({ message: "Restarted" });
})

export { router };
