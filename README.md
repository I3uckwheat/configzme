# Registering

```bash
curl -u <username> configz.me
```

# Uploading Files

```bash
curl -u <username> --form upload=@<your file> configz.me/<filename>
```

# Getting files

```bash
curl -u <username> configz.me/<filename>
```

# updating files

```bash
curl -u <username> -X PATCH -F file=@<your file> configz.me/<filename>
```

# Deleting files

```bash
curl -u <username> -X DELETE configz.me/<filename>
```