import { LoanOverview } from "./LoanOverview";
import { ScheduleTable } from "./ScheduleTable";

// Component for the overall outputs section of the webpage, which will include the Loan Overview and Schedule Table components.
export function OutputsBlock({ loanInfo }) {
    return (
        <>
            <div className="loan-overview">
                <LoanOverview input={loanInfo} />
            </div>
            <div className="schedule-table">
                <ScheduleTable input={loanInfo} />
            </div>
        </>
    )
}