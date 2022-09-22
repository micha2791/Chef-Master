const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// gets all recipes posted by user that is currently logged in
router.get('/', withAuth, (req, res) => {
    console.log(req.session.user_id)
    Recipe.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'ingredients',
        'recipe_steps',
        'category',
        'image_url'
    ],
    order: [['created_at', 'DESC']], 
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'recipe_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
    ]
  })
  .then(dbPostData => {
    const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
    res.render('dashboard', { recipes, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

// add new recipe
router.get('/new', withAuth, (req,res) => {
  res.render('add-post', {loggedIn: true});
})

// when clicking on edit post, will be redirected to this page
router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'ingredients',
            'recipe_steps',
            'category',
            'image_url'
        ],
        include: [
        {
            model: User,
            attributes: ['username']
        }
        ]}
    )
        .then(dbPostData => {
        const recipe = dbPostData.get({ plain: true });

        res.render('edit-recipe', {
        recipe,
        loggedIn: true
        });

        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
})

module.exports = router;