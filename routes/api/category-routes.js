const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    // be sure to include its associated Products
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found" });
      return;
    }

    res.status(200).json(categoryData);
    } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const categoryData = await Category.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (!categoryData).catch((err) => res.json(err));
    res.json(categoryData);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const categoryData = await Category.destroy( {
      where: {
        id: req.params.id,
      }
    }).catch((err) => res.json(err));
    res.json(categoryData);
  }
});

module.exports = router;
