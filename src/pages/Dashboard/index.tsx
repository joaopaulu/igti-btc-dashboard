import BarChart from 'core/components/BarChart';
import DataTable from 'core/components/DataTable';

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <DataTable />
        <h1 className="text-primary py-3">Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-12">
            <h5 className="text-center text-secondary">Grafico da Cotação</h5>
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
