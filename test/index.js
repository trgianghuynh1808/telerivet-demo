function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  const formData = new FormData(formEle);
  const phoneNum = formData.get("phoneNum");
  const content = formData.get("content");

  sendMsgAPI(phoneNum, content);

  contentAreaEle.value = "";
  phoneInputEle.value = "";

  // You must return false to prevent the default form behavior
  return false;
}

function sendMsgAPI(toPhone, content) {
  axios
    .post("http://localhost:3000/sendsms", {
      toPhone,
      content,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const formEle = document.getElementById("send-sms-form");
const phoneInputEle = document.getElementById("phone-num");
const contentAreaEle = document.getElementById("content");

if (formEle.attachEvent) {
  formEle.attachEvent("submit", processForm);
} else {
  formEle.addEventListener("submit", processForm);
}
