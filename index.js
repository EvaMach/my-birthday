document.body.innerHTML = `<h1></h1>`;
const header = document.querySelector('h1');
const myBirthday = dayjs('2022-05-10');
const today = dayjs();

if (today === myBirthday) {
  header.textContent = 'Dnes máš narozeniny!';
} else if (today.isAfter(myBirthday)) {
  header.textContent = 'Letos už jsi narozeniny měla!';
} else {
  header.textContent = 'Ještě pár měsíců vydrž!';
}
