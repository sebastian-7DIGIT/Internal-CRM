import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Razkazhimi Tech Interview");
});

export default router;
