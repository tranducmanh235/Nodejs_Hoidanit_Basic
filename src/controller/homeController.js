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

module.exports = {
    getHomepage,
    getDetailPage,
};
