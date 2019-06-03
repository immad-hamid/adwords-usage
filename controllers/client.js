const handleClient = (db) => (req, res) => {
    const { id } = req.params;

    db('clients')
        .where('id', id)
        .then(client => {
            if (client && client.length) res.json(client[0]);
            else res.status(400).json('Client does not exit');
        })
        .catch(error => {
            res.status(400).json('Unable to fetch any client')
        });
}

module.exports = { handleClient }