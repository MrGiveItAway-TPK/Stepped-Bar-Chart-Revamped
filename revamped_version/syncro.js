
let DIV = "div";
let BUTTON = "button";
let SPAN = "span";
let P = "p";
let A = "a";
let offset_width = 150

function create_stepped_bar_chart(selector,data) {
  let steppedProgress = document.querySelector(selector)
  if (steppedProgress) {
    let valueTotal = 0;

    let title = createElementWithClass(P, "syncro-card-title");
    title.textContent = data.title;

    let step = createElementWithClass(DIV, "syncro-progress-stepped");

    let row = createElementWithClass(DIV, "syncro-row");

    data.catagories.forEach(function (catagory, i) {
      valueTotal += catagory.value;
    });

    data.catagories.forEach(function (catagory, i) {
      stepItem = createElementWithClass(
        DIV,
        "syncro-progress-stepped-item"
      );
      stepItem.setAttribute(
        "data-id",
        "progress-stepped-item-" + selector + "-" + i
      );
      stepItem.textContent = String(catagory.value) + " - " +String(catagory.name) ;
      stepItem.style.width = (catagory.value / valueTotal) * 100 + "%";
      stepItem.style.backgroundColor = catagory.color;

      step.appendChild(stepItem);

      let dot = createElementWithClass(SPAN, "syncro-dot");
      dot.style.backgroundColor = catagory.color;

      let category = createElementWithClass(SPAN, "syncro-category-name");
      category.textContent = String(catagory.value) + " - " + catagory.name;

      let btn = createElementWithClass(BUTTON, "syncro-btn");
      btn.setAttribute(
        "data-target",
        "progress-stepped-item-" + selector + "-" + i
      );
      btn.appendChild(dot);
      btn.appendChild(category);

      let col = createElementWithClass(DIV, "syncro-col-auto");
      col.appendChild(btn);

      row.appendChild(col);
    });

    let cardBody = createElementWithClass(DIV, "syncro-card-body");
    cardBody.appendChild(title);
    cardBody.appendChild(step);
    cardBody.appendChild(row);

    let card = createElementWithClass(DIV, "syncro-card");
    card.appendChild(cardBody);

    let markup = createElementWithClass(DIV);
    markup.appendChild(card);

    steppedProgress.innerHTML = markup.innerHTML;

    [].forEach.call(
      steppedProgress.querySelectorAll(".syncro-progress-stepped-item"),
      function (el) {
        el.addEventListener("mouseenter", (e) => {
          toggleActive(e, el);
        });
        el.addEventListener("mouseleave", (e) => {
          toggleActive(e, el);
        });
      }
    );
    [].forEach.call(
      steppedProgress.querySelectorAll(".syncro-btn"),
      function (el) {
        el.addEventListener("click", function () {
          const dataID = el.getAttribute("data-target");
          let targetElm = document.querySelector(
            '[data-id="' + dataID + '"]'
          );

          if (targetElm.classList.contains("active")) {
            targetElm.classList.remove("active");
            targetElm.classList.remove("width-fit-content");
          } else {
            [].forEach.call(
              steppedProgress.querySelectorAll(
                ".syncro-progress-stepped-item"
              ),
              function (el) {
                el.classList.remove("active");
                el.classList.remove("width-fit-content");
              }
            );
            targetElm.classList.add("active");
            if(targetElm.offsetWidth<offset_width) {
              targetElm.classList.add("width-fit-content");
            }
          }
        });
      }
    );
  }
}

function toggleActive(e, el) {
  if (e.type === "mouseenter") {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
      if(el.offsetWidth<offset_width) {
          el.classList.add("width-fit-content");
      }
    }
  } else if (e.type === "mouseleave") {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      el.classList.remove("width-fit-content");
    }
  }
}

function createElementWithClass(element, className = "") {
  let ele = document.createElement(element);
  if (className) {
    let classList = className.split(" ");
    classList.forEach(function (value, index) {
      ele.classList.add(value);
    });
  }
  return ele;
}