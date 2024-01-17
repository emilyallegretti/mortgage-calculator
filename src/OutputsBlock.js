import { LoanOverview } from "./LoanOverview";
import { ScheduleTable } from "./ScheduleTable";
import { getTableData } from "./lib/GetTableData";

// Component for the overall outputs section of the webpage, which will include the Loan Overview and Schedule Table components.
export function OutputsBlock({ loanInfo }) {
    let data = getTableData(loanInfo)
    return (
        <>
            <div className="loan-overview">
                <LoanOverview input={loanInfo} data={data} />
            </div>
            <div className="schedule-table">
                <ScheduleTable data={data} />
            </div>
        </>
    )
}