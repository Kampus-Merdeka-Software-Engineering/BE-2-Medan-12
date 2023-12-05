import  rmCospace  from "../models/room.model.js";

export function create(req, res) {
 
    if (!req.body.type) {
      return res.status(400).send({
        message: "Everything can not be empty",
      });
    }
 
    const rmcs = {
        type: req.body.type,
        description: req.body.description,
        guest: req.body.guest,
        img: req.body.img,
        status: req.body.status,
      };
  
    // proses menyimpan kedalam database  
    rmCospace.create(rmcs)
      .then((data) => {
        res.json({
          message: "data created successfully.",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while creating the Book.",
          data: null,
        });
      });
  
  }

export function update(req, res) {
const id = req.params.id;
rmCospace.update(req.body, {
    where: { id },
})
    .then((num) => {
    if (num == 1) {
        res.json({
        message: "Book updated successfully.",
        data: req.body,
        });
    } else {
        res.json({
        message: `Cannot update book with id=${id}. Maybe book was not found or req.body is empty!`,
        data: req.body,
        });
    }
    })
    .catch((err) => {
    res.status(500).json({
        message: err.message || "Some error occurred while updating the book.",
        data: null,
    });
    });
}
export function findAll(req, res) {
  rmCospace.findAll()
      .then((uCospace) => {
        res.json({
          message: "data retrieved successfully.",
          data: uCospace,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving books.",
          data: null,
        });
      });
  }

export function findOne(req, res) {
  rmCospace.findByPk(req.params.id)
    .then((rmcs) => {
    res.json({
        message: "data retrieved successfully.",
        data: rmcs,
    });
    })
    .catch((err) => {
    res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
    });
    });
}
