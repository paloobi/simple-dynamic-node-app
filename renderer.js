var fs = require('fs');

function mergeValues(values, content) {

  // cycle over the keys of the values
  for (var key in values) {

    // replace all {{key}} with the values from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  
  // return merged content
  return content;
  
};

// Function that handles the reading of files and merges in values
function view(templateName, values, response) {
  
  // read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', 'utf-8');
  
  fileContents = mergeValues(values, fileContents)
  // insert values into the content
  response.write(fileContents);
}

module.exports.view = view;