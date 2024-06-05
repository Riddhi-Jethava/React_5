import './App.css';
import AddCustomers from './Components/AddCustomers';
import CustomerList from './Components/CustomerList';

function App() {
  return (
   <div>
      <h4>CRM system</h4>
      <AddCustomers/>
      <CustomerList/>
   </div>
  );
}

export default App;
