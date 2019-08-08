const HomeController = {
  index: (req, res) => {
    res.render("index", { title: "Express" });
  }
};

module.exports = HomeController;
