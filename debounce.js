const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDEbounceText = debounce((text) => {
  debounceText.textContent = text;
});
const updateThrottleText = debounce((text) => {
  throttleText.textContent = text;
});
input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDEbounceText(e.target.value);
  updateThrottleText(e.target.value);
});
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// فرض کن دیلی رو گذاشتی روی 1 ثانیه هر تغییری بدی که فاصله تغییر ها کمتر از یک ثانیه طول بکشه کاری نمیکنه تا وقتی دیگه تایمر کلیر نشه و تغییرش ندی
//  حالا بعد از همه تغییر ها یک ثانیه بعد نمایش میده

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs) 
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true     // بار اول کال میشه وقتی کال میشه میگه صبر کن تا دیلی تموم شه بعد دوباره اجرا شو د
    setTimeout(timeoutFunc, delay)
  }
}