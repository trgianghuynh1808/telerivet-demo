const express = require("express");
const telerivet = require("telerivet");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const API_KEY = "NyLBR_eHtVpGBKmMIkSFv5Ht2Jw3EjkHwtve";
const PROJECT_ID = "PJ8bcd022857e4a390";

const storkyPhoneNum = "+84822134417";
const testPhoneNum = "+84332064195";

const tr = new telerivet.API(API_KEY);
const telerivetProject = tr.initProjectById(PROJECT_ID);

app.post("/sendsms", function (req, res) {
  let toPhone = req.body.toPhone;
  let content = req.body.content;

  sendSMS(toPhone, content, function (responseData) {
    console.log(responseData);
  });

  return res.status(200).send("Success");
});

function sendSMS(toPhone, content, callback) {
  telerivetProject.sendMessage(
    {
      content,
      to_number: toPhone,
    },
    function (err, message) {
      callback();
    }
  );
}

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
