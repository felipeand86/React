import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Truck, MapPin, Fuel, FileText, BarChart, ChevronDown, Bell, UserCircle, Search, Menu, X } from 'lucide-react';

const initialData = [
  { name: 'Jan', 'Consumo (L)': 4000 },
  { name: 'Fev', 'Consumo (L)': 3000 },
  { name: 'Mar', 'Consumo (L)': 2000 },
  { name: 'Abr', 'Consumo (L)': 2780 },
  { name: 'Mai', 'Consumo (L)': 1890 },
  { name: 'Jun', 'Consumo (L)': 2390 },
  { name: 'Jul', 'Consumo (L)': 3490 },
];

const invoices = [
  { id: 'NF-001', client: 'ABC Logística', value: 'R$ 5.200,00', status: 'Emitida', date: '2025-08-25' },
  { id: 'NF-002', client: 'Transportes XWZ', value: 'R$ 3.850,00', status: 'Paga', date: '2025-08-22' },
  { id: 'NF-003', client: 'Cargas Rápidas', value: 'R$ 7.100,00', status: 'Pendente', date: '2025-08-21' },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => (
  <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 z-50 lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="p-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-teal-400">Transp.Sys</h2>
      <button onClick={toggleSidebar} className="lg:hidden text-white hover:text-gray-300">
        <X size={24} />
      </button>
    </div>
    <nav className="mt-8">
      <ul>
        <li className="p-4 hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
          <a href="#" className="flex items-center space-x-3">
            <Truck size={20} className="text-teal-400" />
            <span>Frota & Veículos</span>
          </a>
        </li>
        <li className="p-4 bg-slate-800 transition-colors duration-200 cursor-pointer">
          <a href="#" className="flex items-center space-x-3">
            <MapPin size={20} className="text-teal-400" />
            <span>Rastreamento</span>
          </a>
        </li>
        <li className="p-4 hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
          <a href="#" className="flex items-center space-x-3">
            <Fuel size={20} className="text-teal-400" />
            <span>Combustível</span>
          </a>
        </li>
        <li className="p-4 hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
          <a href="#" className="flex items-center space-x-3">
            <FileText size={20} className="text-teal-400" />
            <span>Notas Fiscais</span>
          </a>
        </li>
        <li className="p-4 hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
          <a href="#" className="flex items-center space-x-3">
            <BarChart size={20} className="text-teal-400" />
            <span>Relatórios</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

const Header = ({ toggleSidebar }) => (
  <header className="bg-white shadow p-4 flex items-center justify-between lg:justify-end">
    <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
      <Menu size={24} />
    </button>
    <div className="flex items-center space-x-4">
      <button className="relative">
        <Bell size={24} className="text-gray-600" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
      </button>
      <div className="flex items-center space-x-2">
        <UserCircle size={32} className="text-gray-600" />
        <span className="text-sm font-medium hidden md:block">Usuário Admin</span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  </header>
);

const StatCard = ({ title, value, icon, className }) => (
  <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-start ${className}`}>
    <div className="bg-teal-100 p-3 rounded-full mb-4">
      {icon}
    </div>
    <span className="text-3xl font-bold text-gray-800">{value}</span>
    <h3 className="text-lg font-medium text-gray-500 mt-1">{title}</h3>
  </div>
);

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Frota Ativa"
        value="52"
        icon={<Truck size={24} className="text-teal-500" />}
        className="col-span-1"
      />
      <StatCard
        title="Entregas em Andamento"
        value="18"
        icon={<MapPin size={24} className="text-teal-500" />}
        className="col-span-1"
      />
      <StatCard
        title="Eficiência de Combustível"
        value="3.5 km/L"
        icon={<Fuel size={24} className="text-teal-500" />}
        className="col-span-1"
      />
      <StatCard
        title="Notas Fiscais Pendentes"
        value="3"
        icon={<FileText size={24} className="text-teal-500" />}
        className="col-span-1"
      />
    </div>
  );
};

const MapSection = () => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Rastreamento da Frota</h2>
    <div className="h-96 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">
      {/* Aqui seria a integração com a API do Google Maps ou Mapbox */}
      <p>Mapa Interativo (Simulação)</p>
    </div>
  </div>
);

const FuelChart = () => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Consumo de Combustível Mensal</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={initialData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Consumo (L)" stroke="#14B8A6" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const InvoiceTable = () => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Notas Fiscais Recentes</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Data
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.client}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.value}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  invoice.status === 'Paga' ? 'bg-green-100 text-green-800' :
                  invoice.status === 'Emitida' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {invoice.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {isSidebarOpen && <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar}></div>}
        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-6 lg:p-10 overflow-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Painel de Controle</h1>
            <Dashboard />
            <MapSection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FuelChart />
              <InvoiceTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
