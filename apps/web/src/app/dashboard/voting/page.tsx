"use client";

import { useAuth } from "@/providers/auth-provider";
import { useData } from "@/providers/data-provider";

export default function DashboardVotingPage() {
  const { data, castVote } = useData();
  const { session } = useAuth();
  const votingBills = data.bills.filter((b) => b.status === "Voting");
  const senatorId = session?.user.id ?? "u-senator";

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Digital Voting</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Cast demo votes on bills in &quot;Voting&quot; status (frontend simulation)
      </p>

      {votingBills.length === 0 ? (
        <p className="mt-8 text-muted-foreground">
          No bills in Voting status. Update a bill&apos;s status on the Bills page.
        </p>
      ) : (
        <ul className="mt-6 space-y-6">
          {votingBills.map((bill) => {
            const myVote = data.votes.find(
              (v) => v.billId === bill.id && v.senatorId === senatorId,
            );
            const ayes = data.votes.filter(
              (v) => v.billId === bill.id && v.choice === "Aye",
            ).length;
            const nays = data.votes.filter(
              (v) => v.billId === bill.id && v.choice === "Nay",
            ).length;

            return (
              <li key={bill.id} className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-semibold">{bill.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Aye: {ayes} · Nay: {nays}
                  {myVote ? ` · Your vote: ${myVote.choice}` : ""}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(["Aye", "Nay", "Abstain"] as const).map((choice) => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => castVote(bill.id, senatorId, choice)}
                      className={
                        myVote?.choice === choice
                          ? "rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                          : "rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted"
                      }
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
