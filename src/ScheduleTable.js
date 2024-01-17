// Component for amortization schedule table. 
export function ScheduleTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Payment No.</th>
                    <th>Payment Date</th>
                    <th>Payment Due ($)</th>
                    <th>Principle Due ($)</th>
                    <th>Interest Due ($)</th>
                    <th>Principle Remaining ($)</th>
                    <th>Total Interest to Date ($)</th>
                </tr>
            </thead>
            <tbody>
                {data.map(entry =>
                    <tr key={entry[0]}>
                        <td>{entry[0]}</td>
                        <td>{entry[1]}</td>
                        <td>{Number(entry[2].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[3].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[4].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[5].toFixed(2)).toLocaleString()}</td>
                        <td>{Number(entry[6].toFixed(2)).toLocaleString()}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}