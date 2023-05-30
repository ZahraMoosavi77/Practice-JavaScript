const data = new Map();
let mean = 0;

// Start giving user information
let fullName = prompt("نام و نام خانوادگی خود را وارد کنید");

let course = prompt("دوره ای که در آن شرکت کرده اید را وارد کنید");

let obj = { 1: "اول", 2: "دوم", 3: "سوم" };

for (let i = 1; i < 4; i++) {
  let class1 = prompt(`نام درس ${obj[i]} خود را وارد کنید`);

  let score = prompt("نمره خود را وارد کنید");

  data.set(class1, score);
}

const userName = document.querySelector(".user__name");

userName.innerHTML = fullName;

const courseUser = document.querySelector(".course__user");

courseUser.innerHTML = course;

const row = document.querySelector("tr");

const table = document.querySelector("table");

data.forEach((element, index) => {
  table.insertAdjacentHTML(
    "beforeend",
    `
<tr>
    <td>
        ${element}
    
    </td>

    <td>
    ${index}
    </td>
</tr>
`
  );

  mean += Number(element) / 3;
});

mean = mean.toFixed(2);

const averageScore = document.querySelector(".average__design-score");
averageScore.innerHTML = mean;

const text = document.querySelector(".average__description p");

if (mean <= 70) {
  text.innerHTML = `  به خودت بیاااااااااااااااااااااااااااا مرددددددددددددددددددد شایدم زن`;
} else if (70 < mean <= 80) {
  text.innerHTML = ` اگر نیاز به تمرین اضافه داری بگووو ولی نمیدممممممممممممممممممممممممم هاهاها`;
} else if (80 < mean < 90) {
  text.innerHTML = `   خوب داری میری جلو فقط یکم گاز بده`;
} else if (90 < mean < 97) {
  text.innerHTML = `تو کارت درسته حاااجیییییییی`;
} else if (maen > 97) {
  `شیرینیییییییییییییییییییییییییییی`;
}
