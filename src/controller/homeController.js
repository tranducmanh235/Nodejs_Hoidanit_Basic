import pool from "../config/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`");

    return res.render("index.ejs", {
        dataUser: rows,
        test: "abc string test",
    });
};

let getDetailPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute("select * from users where id = ?", [id]);

    console.log(">>> check req params: ", req.params);
    return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
    // destructuring
    let { fname, lname, email, address } = req.body; // get data from form html

    await pool.execute(
        "insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)",
        [fname, lname, email, address]
    );

    return res.redirect("/");
};

let deleteUser = async (req, res) => {
    let userId = req.body.userId;

    await pool.execute("delete from users where id = ?", [userId]);

    return res.redirect("/");
};

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute("select * from users where id = ?", [id]);
    // console.log(user);

    return res.render("update.ejs", { dataUser: user[0] });
};

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute(
        "update users set firstName=?, lastName=?, email=?, address=? where id=?",
        [firstName, lastName, email, address, id]
    );

    console.log(">>> check update user: ", req.body);
    return res.redirect("/");
};

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUser,
};
