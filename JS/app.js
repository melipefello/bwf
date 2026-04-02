(function () {
  var KEY = "bwf_primer_days_done";

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
    if (d && load()[d]) el.classList.add("is-done");
  });
})();
