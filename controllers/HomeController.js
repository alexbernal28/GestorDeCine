import SeriesModel from "../models/SeriesModel.js";
import GenresModel from "../models/GenreModel.js";

export function GetIndex(req, res, next) {
    SeriesModel.GetAll((series) => {
        GenresModel.GetAll((genres) => {
            res.render("home/index", {
                title: "Home",
                seriesList: series,
                hasseries: series.length > 0,
                genresList: genres
            });
        });
    });
}