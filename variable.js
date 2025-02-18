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
// مکانیزم اجرای کد:
// حلقه for اجرا می‌شود:

// مقدار اولیه i = 0
// i < 4 → درست ✅
// setTimeout در صف اجرا قرار می‌گیرد، ولی فعلاً اجرا نمی‌شود.
// i++ → مقدار i به 1 افزایش می‌یابد.
// حلقه for ادامه پیدا می‌کند:

// i = 1 → i < 4 ✅
// setTimeout دیگری در صف قرار می‌گیرد.
// i++ → مقدار i به 2 افزایش می‌یابد.
// همین روند ادامه دارد...

// i = 2 → setTimeout در صف قرار می‌گیرد → i = 3
// i = 3 → setTimeout در صف قرار می‌گیرد → i = 4
// حلقه for متوقف می‌شود زیرا i = 4 دیگر شرط i < 4 را برقرار نمی‌کند.

// اما تمام setTimeout‌ها همچنان در صف اجرا (macrotask queue) هستند.