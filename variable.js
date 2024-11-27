for (var i = 0; i < 4; i++) {
  // setTimeout(()=>{
  //     const number = i
  //     console.log(number)
  // })
  console.log(i);
}

for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    const number = i;
    console.log(number);
  });
}
// تابع setTimeout کدی که داخلش نوشته شده رو با تأخیر اجرا می‌کنه. این یعنی وقتی console.log(i) اجرا می‌شه، حلقه از قبل تموم شده و مقدار نهایی i (اینجا: 4) در زمان اجرای setTimeout استفاده می‌شه.
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    const number = i;
    console.log(number);
  });
}
