const express = require("express");
const router = express.Router();

// 🔥 Define projects array first
const projects = [
    {
        name: "TWC Online Store",
        image: "/images/twc_online_store.png",
        link: "https://rabalosh8f4.twconline.store/",
        details: "This is my e-commerce platform where you can order products in these categories: Health & Wellness, Healthy Beverages, Intimate Care, Bath & Body, Bags, Watches, Electronics, and Perfumes."
    },
    {
        name: "Tridaz Logistics Services Webpage",
        image: "/images/tls.png",
        link: "https://tridazlogistics.com/",
        details: "An AI-powered IQ testing platform with personalized intelligence profiling."
    },
    {
        name: "Corn Disease-Detection using Convolutional Neural Network (VGG16 and ResNet50)",
        image: "/images/cdd.png",
        link: "https://www.mediafire.com/folder/uvpe2vbawd267/APK?fbclid=IwY2xjawJPu5hleHRuA2FlbQIxMAABHYXQjoH-27Q5NGXzgeNAXI1sr9OUsiin_tC-w6QAEuOq1Ut_cA5WaZ13JQ_aem_kVxHmZg7um49gcC11b7hmw",
        details: "As part of our thesis, our team (Kay) develop this application using Flutter and GCP."
    },
    {
        name: "Festivals of Camarines Sur - Abalos Fest",
        image: "/images/abalos-fest.png",
        link: "https://zaphro5.github.io/Abalos-Fest/index.html",
        details: "This is a webpage featuring the various festivals within the province of Camarines Sur."
    },
    {
        name: "Datesfruit Ph",
        image: "/images/datesfruitph.png",
        link: "https://www.datesfruitph.com/",
        details: "This is one of the websites we build for a client during my internship period at Intelliseven Solutions Inc. using Nuxt3, Express, and MongoDB."
    },
    {
        name: "Cryptograhic Streamlit App",
        image: "/images/crypto.png",
        link: "https://zaphro5-crytographic-app-app-z7ntct.streamlit.app/",
        details: "A streamlit-based user interface for encrypting and decrypting messages using the implemented Advanced Encryption Standard (AES) and Rivest-Shamir-Adleman (RSA) algorithms with a separate tab in the UI for generating and verifying Secure Hash Algorithm 256 (SHA-256) hash values of messages or files."
    },
    {
        name: "Line-Follower Robot",
        image: "/images/line-follower.png",
        link: "https://drive.google.com/file/d/1zSryPe_BseMcxqA5--r1hNWG12l8IzyT/view?usp=drive_link",
        details: "We build a line-follower robot usng Arduino Uno and Infrared Sensor"
    },
    {
        name: "Obstacle-Avoiding Prototype",
        image: "/images/obstacle-avoiding.png",
        link: "https://drive.google.com/file/d/1CDs_AjN9eRkojCTazHvxwUpe_MM3E5S5/view?usp=sharing",
        details: "We build an obstacle-avoiding robot prototype using Arduino Uno and Ultrasonic Sensor"
    }
];

// 🔥 Pass 'projects' to the template
router.get("/", (req, res) => {
    res.render("index", { 
        title: "Home | Rojhon Abalos", 
        logo: "/images/logo.png"
    });
});

// Define credentials array
const credentials = [
    {
        name: "Official Transcript of Record (1 of 2)",
        image: "/images/tor1.jpeg",
        details: "Completed Bachelor of Science in Computer Science degree as Magna Cum Laude (1.27) at Camarines Sur Polytechnic Colleges"
    },
    {
        name: "Official Transcript of Record (2 of 2)",
        image: "/images/tor2.jpeg",
        details: "..."
    },
    {
        name: "Certificate of Recognition (Magna Cum Laude)",
        image: "/images/cormcl.jpeg",
        details: "Presented for earning a GWA of 1.27"
    },
    {
        name: "Certificate of Completion (Intelliseven Technology Solutions Inc.)",
        image: "/images/cocintelliseven.jpeg",
        details: "Completed OJT internship in the field of web development at Intelliseven Technology Solutions Inc."
    },
    {
        name: "Certificate of Completion (Tridaz Logistics Services)",
        image: "/images/coctridaz.jpg",
        details: "Completed DOST's Practical Training Program in the fields of web development and system management at Tridaz Logistics Services"
    },
    {
        name: "President's List Award",
        image: "/images/pla.jpeg",
        details: "Received President's List Award at Camarines Sur Polytechnic Colleges for exemplary academic performance."
    }
];

// Pass 'credentials' to the credentials.ejs template
router.get("/credentials", (req, res) => {
    res.render("credentials", { title: "My Credentials", credentials });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "About Me - Rojhon L. Abalos" });
});

// 🔥 Fix: Ensure 'projects' is passed to the projects.ejs template
router.get("/projects", (req, res) => {
    res.render("projects", { title: "My Projects", projects });
});

module.exports = router;
