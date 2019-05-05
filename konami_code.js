const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
init();

function init() {
  // Write your JavaScript code inside the init() function

  let body = document.body;
  body.addEventListener('click', onKeyDownHandler);

}

function onKeyDownHandler(e)
{
  const key = parseInt(e.detail || e.which);

  if (key === code[index])
  {
    index++;

    if (index === code.length)
    {
      alert("Hurray!");

      index = 0;
    }
  }
  else
  {
    alert("Wrong");
    index = 0;
  }
}
