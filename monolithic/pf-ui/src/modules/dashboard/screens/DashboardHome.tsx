import React, { useMemo, useCallback } from 'react';
import Map from '../components/Map';
import MetricCard from '../components/MetricCard';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';

const DashboardHome = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
    const [selectedStates, setSelectedStates] = React.useState<string[]>([]);

    const categories = useMemo(() => {
        return [
            { label: 'Users', value: 'users' },
            { label: 'Bookings', value: 'bookings' },
            { label: 'Errors', value: 'errors' },
        ];
    }, []);

    const states = useMemo(() => {
        return [
            { label: 'Maharashtra', value: 'MH' },
            { label: 'Karnataka', value: 'KA' },
            { label: 'Gujarat', value: 'GJ' },
            { label: 'Tamil Nadu', value: 'TN' },
        ];
    }, []);

    const metrics = useMemo(() => {
        return [
            { value: 120, label: 'Total', status: 'Active' },
            { value: 45, label: 'Active Users', status: 'Stable' },
            { value: 12, label: 'Errors', status: 'Critical' },
            { value: 300, label: 'Bookings', status: 'New' },
        ];
    }, []);

    // ✅ Sample chart data (memoized to avoid new-object-in-JSX warnings)
    const lineData = useMemo(() => {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: 'Sales',
                    data: [65, 59, 80, 81, 56],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: 0.4,
                },
            ],
        } as const;
    }, []);

    const barData = useMemo(() => {
        return {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [
                {
                    label: 'Values',
                    data: [12, 19, 3, 5],
                    backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
                },
            ],
        } as const;
    }, []);

    const pieData = useMemo(() => {
        return {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#EF5350', '#42A5F5', '#FFCA28'],
                    hoverBackgroundColor: ['#E53935', '#1E88E5', '#FDD835'],
                },
            ],
        } as const;
    }, []);

    const doughnutData = useMemo(() => {
        return {
            labels: ['Download', 'In-Store', 'Mail-Order'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#66BB6A', '#42A5F5', '#FFA726'],
                    hoverBackgroundColor: ['#43A047', '#1E88E5', '#FB8C00'],
                },
            ],
        } as const;
    }, []);

    const mapStyle = useMemo(() => {
        return { height: '40rem' } as const;
    }, []);

    return (
        <div className="grid nested-grid">
            <div className="col-12">
                <div className="flex justify-content-end align-items-center gap-3">
                    {/* Single Select */}
                    <Dropdown
                        value={selectedCategory}
                        options={categories}
                        onChange={useCallback((e: { value: string | null }) => {
                            setSelectedCategory(e.value);
                        }, [])}
                        placeholder="Select Category"
                        className="w-12rem"
                    />

                    {/* Multi Select */}
                    <MultiSelect
                        value={selectedStates}
                        options={states}
                        onChange={useCallback((e: { value: string[] }) => {
                            setSelectedStates(e.value);
                        }, [])}
                        placeholder="Select States"
                        display="chip"
                        className="w-16rem"
                    />
                </div>
            </div>

            {/* Top metrics row */}
            {metrics.map((metric) => {
                return (
                    <div key={metric.label} className="col-12 lg:col-6 xl:col-3">
                        <MetricCard
                            value={metric.value}
                            label={metric.label}
                            status={metric.status}
                        />
                    </div>
                );
            })}

            {/* Left: Map */}
            <div className="col-6" style={mapStyle}>
                <Map />
            </div>

            {/* Right: Charts */}
            <div className="col-6">
                <div className="grid h-full">
                    <div className="col-6">
                        <div className="card h-full">
                            <Chart type="line" data={lineData} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-full">
                            <Chart type="bar" data={barData} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-full">
                            <Chart type="pie" data={pieData} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card h-full">
                            <Chart type="doughnut" data={doughnutData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
