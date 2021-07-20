Use `getElementsByTagName` to get a element by tag name. 

`row.cells[0]` just is a [HTML elements reference][1] . Just find a tag inside this element and update the stag style as you did.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const table = document.getElementById("steamtable");

    window.onload = function () {
      for (let i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[2].innerText == "yes") {
          row.cells[0].getElementsByTagName('a')[0].style.color = 'red';
          row.cells[1].style.color = 'red';
          row.cells[2].style.color = 'red';
          row.cells[3].style.color = 'red';
        }
      }
    }

<!-- language: lang-html -->

    <table id="steamtable">
    <tr id="header-row">
      <th class="tableheaders" id="t_headersteamlink">steamlink</th>
      <th class="tableheaders" id="t_headername">name</th>
      <th class="tableheaders" id="t_headerbanned">banned?</th>
      <th class="tableheaders" id="t_headerbandate">banDate</th>
      <th class="tableheaders" id="t_headercreator">creator</th>
      <th class="tableheaders" id="t_headercreationdate">creationDate</th>
    </tr>

    <tr class="datarow">
      <td ><a href="https://steamcommunity.com/id/example">steamcommunity.com/id/example</a></td>
      <td>exampleUser</td>
      <td>yes</td>
      <td>24/06/2021</td>
      <td>exampleCreator</td>
      <td>20/06/2021</td>
    </tr>
    </table>

<!-- end snippet -->


  [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
