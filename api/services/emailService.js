const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const configs = require('../../config/configuration.json');

let emailConfig = {};
let from = '';


/**
 * Creates the configuration for emailing
 * 1) Create transporter object with configuration of dev|test|prod stage
 * 2) Create email from string
 * 3) Create html files for email messages
 * Html files can contain links to application, so we need to have host value for every stage
 *
 **/
const create = () => {

  const mailOption = configs.email.smptConfig;
  from = configs.email.from;;
  emailConfig = nodemailer.createTransport(mailOption);
};

const generateMessageContent = (header, subheader, name) => {
  const emailTemplate = fs.readFileSync(path.resolve(__dirname, `./email/templates/email-template.html`), {encoding: 'utf-8'});
  return emailTemplate
    .replace('<%header%>', header)
    .replace('<%subheader%>', subheader)
    .replace('<%name%>', name);
};

const send = content => {
  content.from = from;
  return emailConfig.sendMail(content);
};

module.exports = { create, generateMessageContent, send };
