(function () {
  var program = document.body.getAttribute("data-program") || "primer";
  var KEY =
    program === "home14"
      ? "home14_days_done"
      : "bwf_primer_days_done";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function save(obj) {
    localStorage.setItem(KEY, JSON.stringify(obj));
  }

  var day = document.body.getAttribute("data-day");
  if (day) {
    var cb = document.getElementById("day-done");
    if (cb) {
      var data = load();
      cb.checked = !!data[day];
      cb.addEventListener("change", function () {
        data = load();
        if (cb.checked) data[day] = true;
        else delete data[day];
        save(data);
      });
    }
  }

  document.querySelectorAll("[data-day-link]").forEach(function (el) {
    var d = el.getAttribute("data-day-link");
    if (d) {
      try {
        var primer = JSON.parse(
          localStorage.getItem("bwf_primer_days_done") || "{}"
        );
        if (primer[d]) el.classList.add("is-done");
      } catch (e) {}
    }
  });

  document.querySelectorAll("[data-home14-link]").forEach(function (el) {
    var d = el.getAttribute("data-home14-link");
    if (d) {
      try {
        var h = JSON.parse(localStorage.getItem("home14_days_done") || "{}");
        if (h[d]) el.classList.add("is-done");
      } catch (e) {}
    }
  });
})();
