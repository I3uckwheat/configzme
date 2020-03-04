// This is just some sample data so you don't have to think of your own!
const features = {
  feature1: {
    name: "Register",
    command: "curl -u <username> -X POST https://configz.me"
  },

  feature2: {
    name: "Uploading Files",
    command:
      "curl -u <username> -F file=@<your file> https://configz.me/<filename>"
  },

  feature3: {
    name: "Getting Files",
    command: "curl -u <username> https://configz.me/<filename>"
  },

  feature4: {
    name: "Listing Files",
    command: "curl -u <username> https://configz.me/files"
  },

  feature5: {
    name: "Updating Files",
    command:
      "curl -u <username> -F file=@<your file> https://configz.me/<filename>/update"
  },

  feature6: {
    name: "Deleting Files",
    command: "curl -u <username> https://configz.me/<filename>/destroy"
  }
};

export default features;
