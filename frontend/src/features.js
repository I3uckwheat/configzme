const features = [
  {
    name: "Register",
    command: "curl -u <username> -X POST https://configz.me"
  },

  {
    name: "Uploading Files",
    command:
      "curl -u <username> -F file=@<your file> https://configz.me/<filename>"
  },

  {
    name: "Getting Files",
    command: "curl -u <username> https://configz.me/<filename>"
  },

  {
    name: "Listing Files",
    command: "curl -u <username> https://configz.me/files"
  },

  {
    name: "Updating Files",
    command:
      "curl -u <username> -F file=@<your file> https://configz.me/<filename>/update"
  },

  {
    name: "Deleting Files",
    command: "curl -u <username> https://configz.me/<filename>/destroy"
  }
];

export default features;
