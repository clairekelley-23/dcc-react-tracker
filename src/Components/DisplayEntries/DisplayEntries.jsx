const DisplayEntries = (props) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      );
}
 
export default DisplayEntries;