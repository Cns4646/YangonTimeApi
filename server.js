const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/get_time", (req, res) => {
    const now = new Date();
    const options = { timeZone: "Asia/Yangon", hour12: false };
    const options12h = { timeZone: "Asia/Yangon", hour12: true };

    const time24h = now.toLocaleTimeString("en-US", options);
    const time12h = now.toLocaleTimeString("en-US", options12h);

    const data = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        hour_24: now.getHours(),
        hour_12: now.toLocaleString("en-US", { hour: "2-digit", hour12: true }).split(" ")[0],
        minute: now.getMinutes(),
        seconds: now.getSeconds(),
        milliSeconds: now.getMilliseconds(),
        dateTime: now.toISOString(),
        date: now.toLocaleDateString("en-US"),
        time_24h: time24h,
        time_12h: time12h,
        timeZone: "Asia/Yangon",
        dayOfWeek: now.toLocaleDateString("en-US", { weekday: "long" }),
        dstActive: false
    };

    res.json(data);
});

// Vercel Compatible API Export
module.exports = app;
