"use strict";
//  Type inference in zod
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var express_1 = require("express");
var app = (0, express_1.default)();
// Define the schema for profile update
var userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", function (req, res) {
    var success = userProfileSchema.safeParse(req.body).success;
    var updateBody = req.body; // how to assign a type to updateBody?
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
