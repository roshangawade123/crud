const express = require('express');
const router = express.Router();

const {
    getDashboard,
    addToDashboard,
    addToDashboard1,
    UpdateDashboard,
    UpdateDashboard1,
    DeleteDashboard
} = require("../controllers/user")

router.get("/", getDashboard);
router.get("/add", addToDashboard);
router.post("/add/", addToDashboard1);
// Update this part in user.js
router.get("/update/:id", UpdateDashboard);
router.post("/update/:id", UpdateDashboard1); // Use post for update
router.post("/delete", DeleteDashboard);

module.exports = router