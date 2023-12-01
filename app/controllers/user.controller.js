const db = require("../models");
const Cs = db.uCospace;

// CREATE: untuk menambahkan data kedalam tabel book
exports.create = (req, res) => {
  // validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  };
  
  // daya yang didapatkan dari inputan oleh pengguna
  const cs = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  // proses menyimpan kedalam database
  Cs.create(cs)
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

};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  Cs.findAll()
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
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
  const id = req.params.id;
  Cs.update(req.body, {
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
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Cs.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "data deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete book with id=${id}. Maybe book was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the book.",
        data: null,
      });
    });
};

// Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  Cs.findByPk(req.params.id)
    .then((cs) => {
      res.json({
        message: "data retrieved successfully.",
        data: cs,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
