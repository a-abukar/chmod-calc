function calculatePermissions(data) {
  const owner = (data.owner_read ? 4 : 0) + (data.owner_write ? 2 : 0) + (data.owner_execute ? 1 : 0);
  const group = (data.group_read ? 4 : 0) + (data.group_write ? 2 : 0) + (data.group_execute ? 1 : 0);
  const publicPerms = (data.public_read ? 4 : 0) + (data.public_write ? 2 : 0) + (data.public_execute ? 1 : 0);

  const octal = `${owner}${group}${publicPerms}`;
  const symbolic = `${data.owner_read ? 'r' : '-'}${data.owner_write ? 'w' : '-'}${data.owner_execute ? 'x' : '-'}`
                + `${data.group_read ? 'r' : '-'}${data.group_write ? 'w' : '-'}${data.group_execute ? 'x' : '-'}`
                + `${data.public_read ? 'r' : '-'}${data.public_write ? 'w' : '-'}${data.public_execute ? 'x' : '-'}`;

  return { octal, symbolic };
}

module.exports = (req, res) => {
  if (req.method === 'POST') {
      const data = req.body;
      console.log(`Received data: ${JSON.stringify(data)}`);

      try {
          const result = calculatePermissions(data);
          console.log(`Result: ${JSON.stringify(result)}`);
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      } catch (err) {
          console.error(`Error: ${err}`);
          res.status(500).json({ error: 'Error calculating permissions' });
      }
  } else {
      res.status(405).json({ error: 'Method not allowed' });
  }
};
