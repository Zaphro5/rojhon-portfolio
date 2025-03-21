const express = require("express");
const router = express.Router();

// 🔥 Define projects array first
const projects = [
    {
        name: "ShopRJ",
        image: "/images/shoprj.png",
        link: "https://shoprj.com",
        details: "A unique e-commerce platform integrating gamified rewards with affiliate marketing."
    },
    {
        name: "ROJ IQ Test",
        image: "/images/roj-iq-test.png",
        link: "https://roj-iq-test.com",
        details: "An AI-powered IQ testing platform with personalized intelligence profiling."
    },
    {
        name: "GreenGoals",
        image: "/images/greengoals.png",
        link: "https://greengoals.com",
        details: "A sustainability tracking web app for eco-conscious individuals."
    }
];

// 🔥 Pass 'projects' to the template
router.get("/", (req, res) => {
    res.render("index", { 
        title: "Home | Rojhon Abalos", 
        logo: "/images/logo.png"
    });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "About Me - Rojhon L. Abalos" });
});

// 🔥 Fix: Ensure 'projects' is passed to the projects.ejs template
router.get("/projects", (req, res) => {
    res.render("projects", { title: "My Projects", projects });
});

module.exports = router;
