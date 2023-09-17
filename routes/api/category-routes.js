const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include:[{model:Product}]
    });
    (categoryData) ? res.status(200).json(categoryData) : res.status(418).json(`categories don't exist here`);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{model:Product}]
    });
    (categoryData) ? res.status(200).json(categoryData) : res.status(404).json(`category id ${req.params.id} not found`);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    });
    console.log(`new product category added to db`);
    res.status(200).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id:req.params.id
      }
    }
    );
    console.log(`product category name changed in db`);
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{model:Product}]
    });
    (updateCategory) ? res.status(200).json(categoryData) : res.status(404).json(`category id ${req.params.id} not found`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (categoryData) {
        console.log(` Category ${req.params.id} destroyed with prejudice from the db`);
        res.status(200).json(` Category ${req.params.id} destroyed with prejudice from the db`); 
    } else {
      res.status(404).json(`category id ${req.params.id} not found`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
