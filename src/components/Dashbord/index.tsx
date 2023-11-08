import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionTable } from "../TransactionsTable";
export function Dashbord() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
