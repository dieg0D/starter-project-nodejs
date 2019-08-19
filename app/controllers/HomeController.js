class HomeController {
  index = (req, res) => {
    res.render("index", { title: "Express" });
  };

  
}

export default new HomeController();
