const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include:{
        all:true
      },
      through:ProductTag
    });
    (tagData) ? res.status(200).json(tagData) : res.status(404).json(`No tags found in db`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, 
    {
      include:{
        all:true
      },
      //im not sure if this is needed here or not or if it is already defined in the models index
      through:ProductTag
    },
    {
      where:{
        id:req.params.id
      }
    }
    );
    (tagData) ? res.status(200).json(tagData) : res.status(404).json(`No tags with id ${req.params.id} found in db`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(
      {
        tag_name:req.body.tag_name
      },
      {
        include:{
          all:true
        }
      }
    );
    (tagData) ? res.status(201).json(tagData) : res.status(418).json(`tag creation failed`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      {
        tag_name:req.body.tag_name
      },
      {
        where:{
          id:req.params.id
        }
      },
      {
        include:{
          all:true
        }
      }
    );
    if (tagData) {
      res.status(201).json(`tag id ${req.params.id} updated`);
    } else {
      res.status(404).json(`tag not found by id ${req.params.id}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy(
      {
        where:{
          id:req.params.id
        }
      }
    );
    if (tagData) {
      console.log(`tag id ${req.params.id} destroyed`);
      res.status(200).json(`tag id ${req.params.id} destroyed`);
    } else {
      res.status(418).json(`tag not found by id ${req.params.id}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
