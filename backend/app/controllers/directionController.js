const directions = {
  title: (
`---------------------
Welcome to configz.me!
---------------------

`),
  curl: (`
# Registering
curl -u <username> -X POST https://configz.me

# Uploading Files
curl -u <username> -F file=@<your file> https://configz.me/<filename>

# Getting files
curl -u <username> https://configz.me/<filename>

# Listing files
curl -u <username> https://configz.me/files

# updating files
curl -u <username> -F file=@<your file> https://configz.me/<filename>/update

# Deleting files
curl -u <username> https://configz.me/<filename>/destroy
---------------------

`),
  Wget: (`
Wget directions coming soon!

`),
}

exports.showDirections = (req, res) => {
  res.send(directions.title + directions[res.locals.userAgent]);
}


