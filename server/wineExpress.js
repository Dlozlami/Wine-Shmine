const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))

const secretKey = 'o8uhs7errqlosw830j#^*)N[]pek3e9--o-wqldsm902is,-dsuew0fduyj2-slw0wjd4r[w0-iiwqokweidg8wqj2pss9tffb96ywaxb937ehd90dow-;e;==lk9j98j/.oi-=[;k28uw4rq4ewfrqf+q';
const refreshKey = 'o8uhs7errqlosw830j#^*)N[]xsyg26gednpsrtuui98908732fros-w;w.skhgfeazdsuew0fduyj2-slw0wjd4r[w0-iiwqokdfdweidg8wqj2pss9tff848r4e9p[jn9765tbw ds=1qqwsfrqf+q';

mongoose.connect('mongodb://127.0.0.1:27017/wine-list')





app.listen(8080, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:8080/");
})