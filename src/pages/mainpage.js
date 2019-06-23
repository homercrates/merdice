import React from 'react';

function MainPage() {
    return (
        <div className="App">
          <h1>
            Mer Dice Pratice round
          </h1>
          <p>
            Below is where I should put some dice stuff 
          </p>
          <ul>
            <li>results 1</li>
            <li>results 2</li>
            <li>results 3</li>
          </ul>
          <table>
            <tbody>
              <tr>
                <th>
                  Team 1
                </th>
                <th>
                  Team 2
                </th>
              </tr>
              <tr>
                <td>
                   1 2 3 5 6 7 8 9 10
                </td>
                <td>
                  4 5 6 8 9 10 11 12
                </td>
              </tr>
              <tr>
                  <td>
                      abcd
                  </td>
                  <td>
                      efgh
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}

export default MainPage;