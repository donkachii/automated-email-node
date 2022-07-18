const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const { transporter } = require("./config/transporter")

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });