import connection from "../config/connectDB";

let getHomepage = (req, res) => {
    // logic
    let data = [];
    connection.query("SELECT * FROM `users`", function (err, results, fields) {
        console.log(">>>check mysql");
        console.log(results);
        results.map((row) => {
            data.push({
                id: row.id,
                email: row.email,
                address: row.address,
                firstName: row.firstName,
                lastName: row.lastName,
            });
        });

        // console.log(">>check data inside: ", data);

        return res.render("index.ejs", { dataUser: JSON.stringify(data) });
    });
};

module.exports = {
    getHomepage,
};
