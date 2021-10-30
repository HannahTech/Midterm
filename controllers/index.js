/*
Hengameh Khajehpour
SN# 301122261
Midterm project
Comp 229 Sec009
Fall 2021
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

exports.about = function(req, res, next) {
    res.render('index', { title: 'About' });
};