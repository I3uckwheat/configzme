/**
 * @fileName - name with extension to name the downloading file
 *   - "filename.txt"
 *   - "help_me.bat"
 * 
 * @getContentsCallback - Callback that returns text data to be inserted into the file
 */

export async function downloadFile(fileName, getContentsCallback) {
  const fileContents = await getContentsCallback();
  const href = `data:text/plain;charset=utf-8,${encodeURIComponent(fileContents)}`;

  const element = document.createElement('a');
  element.setAttribute('href', href);
  element.setAttribute('download', fileName); 
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
