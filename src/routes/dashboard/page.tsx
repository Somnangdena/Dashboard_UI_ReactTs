import {
  CreditCard,
  DollarSign,
  Package,
  PencilLine,
  Star,
  Trash,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  Area,
  XAxis,
  YAxis,
} from "recharts";
import {
  overviewData,
  recentSaleData,
  topProducts,
} from "../../constants/index";
import { useTheme } from "../../hooks/UseTheme";
import Footer from "../../layouts/Footer";

const DashboardPage = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Package size={26} />
            </div>
            <p className="card-title">Total Products</p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              25,154
            </p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              25%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <DollarSign size={26} />
            </div>
            <p className="card-title">Total Paid Orders</p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              $16,000
            </p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              12%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <Users size={26} />
            </div>
            <p className="card-title">Total Customers</p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              15,400k
            </p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              15%
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
              <CreditCard size={26} />
            </div>
            <p className="card-title">Sales</p>
          </div>
          <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
            <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
              12,340
            </p>
            <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:text-blue-600 dark:border-blue-600">
              <TrendingUp size={18} />
              19%
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4">
          <div className="card-header">
            <p className="card-title">Overview</p>
          </div>
          <div className="card-body p-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={overviewData}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip cursor={false} formatter={(value) => `$${value}`} />
                <XAxis
                  dataKey="name"
                  strokeWidth={0}
                  stroke={theme === "light" ? "#475569" : "#94a3b8"}
                />
                <YAxis
                  dataKey="total"
                  strokeWidth={0}
                  stroke={theme === "light" ? "#475569" : "#94a3b8"}
                  tickFormatter={(value) => `$${value}`}
                  tickMargin={6}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card col-span-1 md:col-span-2 lg:col-span-3">
          <div className="card-header">
            <p className="card-title">Recent Sales</p>
          </div>
          <div className="card-body h-75 overflow-auto p-0">
            {recentSaleData.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between gap-x-4 py-2 pr-2">
                <div className="flex items-center gap-x-4">
                  <img
                    src={sale.image}
                    alt={sale.name}
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-y-2">
                    <p className="font-medium text-slate-900 dark:text-slate-50">
                      {sale.name}
                    </p>
                    <p className="font-sm text-slate-700 dark:text-slate-400">
                      {sale.email}
                    </p>
                  </div>
                </div>
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  ${sale.total}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p className="card-title">Top Orders</p>
        </div>
        <div className="card-body p-0">
          <div className="relative h-125 w-full shrink-0 overflow-auto rounded-none scrollbar-thin">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head">#</th>
                  <th className="table-head">Product</th>
                  <th className="table-head">Price</th>
                  <th className="table-head">Status</th>
                  <th className="table-head">Rating</th>
                  <th className="table-head">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {topProducts.map((products) => (
                  <tr key={products.number}>
                    <td className="table-cell">{products.number}</td>
                    <td className="table-cell">
                      <div className="flex w-max gap-x-4">
                        <img
                          className="size-14 rounded-lg object-cover"
                          src={products.image}
                          alt={products.name}
                        />
                        <div className="flex flex-col">
                          <p>{products.name}</p>
                          <p className="font-normal text-slate-600 dark:text-slate-400">
                            {products.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">${products.price}</td>
                    <td className="table-cell">{products.status}</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-2">
                        <Star
                          className="fill-yellow-600 stroke-yellow-600"
                          size={18}
                        />
                        {products.rating}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-4">
                        <button className="text-blue-500 dark:text-blue-600">
                          <PencilLine size={20} />
                        </button>
                        <button className="text-red-500 dark:text-red-600">
                          <Trash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardPage;
