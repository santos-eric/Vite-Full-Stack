// updated node doesn't require this format anymore, must enable at package.json below 'main': "index.js"
// const express = require('express')

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//must secure credentials
const CONNECTION_URL =
	'mongodb+srv://esantosdev:S0987tanley123@cluster0.rtvkfrt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((e) => console.log(e.message));

// not necessary anymore
// mongoose.set('useFindAndModify', false);

// https:www.mongodb.com/cloud/atlas
