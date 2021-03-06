import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import sassMiddleware from "node-sass-middleware";
import routes from "./config/routes.js";

class App {
  constructor() {
    this.app = express();
    this.views();
    this.middlewares();
    this.router();
    this.exceptionHandler();
  }

  views = () => {
    this.app.set("views", path.join(__dirname, "./app/views"));
    this.app.set("view engine", "ejs");
  };

  middlewares = () => {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(
      sassMiddleware({
        src: path.join(__dirname, "public"),
        dest: path.join(__dirname, "public"),
        outputStyle: "compressed"
      })
    );
    this.app.use(express.static(path.join(__dirname, "public")));
  };

  router = () => {
    this.app.use("/", routes);
  };

  exceptionHandler = () => {
    this.app.use((req, res, next) => {
      next(createError(404));
    });

    // error handler
    this.app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render("error");
    });
  };
}

module.exports = new App().app;
