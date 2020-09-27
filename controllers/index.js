const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');

//prefixes routes with " ", "dashboard," "api"
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
//requested endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;




// //allowing API to be scalable
// const router = require('express').Router();
// //collecting packaged group of API endpoints
// const userRoutes = require('./api/user-routes');
// const postRoutes = require('./api/post-routes');
// const commentRoutes = require('./api/comment-routes');


// //prefixes w/ /users; /posts
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);


// //packaged up routes to be used in Server.Js
// module.exports = router;